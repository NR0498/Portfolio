interface ContactRequest {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;

function asText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character);
}

function sendJson(response: { status: (statusCode: number) => { json: (body: unknown) => void } }, statusCode: number, body: unknown) {
  response.status(statusCode).json(body);
}

// Vercel serverless function. Keep secrets in Vercel environment variables,
// never in portfolioData.ts or any client-side file.
export default async function handler(
  request: { method?: string; body?: ContactRequest | string },
  response: { status: (statusCode: number) => { json: (body: unknown) => void } },
) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Method not allowed.' });
    return;
  }

  let body: ContactRequest;

  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body) as ContactRequest : request.body ?? {};
  } catch {
    sendJson(response, 400, { error: 'Invalid contact form data.' });
    return;
  }
  const name = asText(body.name);
  const email = asText(body.email);
  const message = asText(body.message);

  // Honeypot: bots fill this hidden field, real visitors do not.
  if (asText(body.website)) {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (!name || !email || !message || !email.includes('@')) {
    sendJson(response, 400, { error: 'Please enter a name, valid email address, and message.' });
    return;
  }

  if (name.length > MAX_NAME_LENGTH || email.length > MAX_EMAIL_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    sendJson(response, 400, { error: 'Your message is too long. Please shorten it and try again.' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error('Contact form email variables are not configured.');
    sendJson(response, 500, { error: 'The contact service is not configured yet.' });
    return;
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        html: `
          <h1>New portfolio contact</h1>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend rejected contact email:', await resendResponse.text());
      sendJson(response, 502, { error: 'Unable to send your message right now. Please try again shortly.' });
      return;
    }

    sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error('Contact form email delivery failed:', error);
    sendJson(response, 500, { error: 'Unable to send your message right now. Please try again shortly.' });
  }
}
