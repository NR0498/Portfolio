/**
 * PORTFOLIO CONTENT
 * --------------------------------------------------------------------------
 * Update this file when you are ready to personalize the site. Every visible
 * placeholder is kept here so you do not need to hunt through UI components.
 */

export const portfolio = {
  // BASIC IDENTITY — replace these first.
  name: 'YOUR NAME',
  shortName: 'YOUR.NAME',
  role: 'Creative Developer & Digital Builder',
  tagline: 'I turn ambitious ideas into thoughtful digital experiences.',
  status: 'Open to opportunities',
  heroImage: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=720&q=85',

  // ABOUT SECTION
  about: {
    paragraphs: [
      'Write a short introduction here. Share what you do, what you enjoy building, and the kind of work you want to be known for.',
      'Use this second paragraph for your background, working style, or a detail that makes your story memorable.',
    ],
    achievements: [
      { icon: '✦', text: 'Add a measurable achievement or milestone' },
      { icon: '⚡', text: 'Describe a skill you are proud of' },
      { icon: '◈', text: 'Mention a collaboration, role, or community' },
      { icon: '▣', text: 'Add one more reason to work with you' },
    ],
  },

  // SKILLS SECTION — add, remove, or rename categories and skills freely.
  skillGroups: [
    {
      title: 'CREATE.EXE',
      accent: 'orange',
      items: [
        { icon: '✦', label: 'Interface Design' },
        { icon: '◫', label: 'Creative Direction' },
        { icon: '◇', label: 'Design Systems' },
        { icon: '▧', label: 'Visual Storytelling' },
      ],
    },
    {
      title: 'BUILD.EXE',
      accent: 'cyan',
      items: [
        { icon: '⌘', label: 'React & TypeScript' },
        { icon: '↯', label: 'Frontend Engineering' },
        { icon: '▤', label: 'Responsive Design' },
        { icon: '⌁', label: 'Web Performance' },
      ],
    },
  ],
  tools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'GitHub', 'Notion', 'VS Code'],

  // PROJECTS — set projectUrl to your live site, GitHub repository, or case study.
  projects: [
    {
      title: 'Project One',
      description: 'Replace this with a concise summary of the problem, your contribution, and the result.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85',
      technologies: ['React', 'TypeScript', 'Vercel'],
      projectUrl: 'https://github.com/your-username/project-one',
    },
    {
      title: 'Project Two',
      description: 'Use this card to showcase another project, client engagement, experiment, or open-source contribution.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85',
      technologies: ['Design', 'API', 'Testing'],
      projectUrl: 'https://github.com/your-username/project-two',
    },
    {
      title: 'Project Three',
      description: 'A third example helps visitors see the range of your interests and capabilities.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85',
      technologies: ['Next.js', 'UX', 'Deployment'],
      projectUrl: 'https://github.com/your-username/project-three',
    },
  ],

  // CERTIFICATES — remove this section from App.tsx later if it does not suit your portfolio.
  certificates: [
    { title: 'Certificate One', issuer: 'Issuing Organization', date: '2026', icon: '✦' },
    { title: 'Certificate Two', issuer: 'Issuing Organization', date: '2025', icon: '◈' },
    { title: 'Certificate Three', issuer: 'Issuing Organization', date: '2024', icon: '◇' },
  ],

  // WRITING / ACTIVITY SECTION
  latestPost: {
    title: 'A short title for your latest article or update',
    summary: 'Use this space for a short preview. You can change the button link to a blog post, a LinkedIn post, or remove this section entirely.',
    date: 'Month DD, YYYY',
    readingTime: '5 min read',
    url: 'https://your-blog-url.example',
  },
  activities: [
    { icon: '✎', text: 'Add a recent project, post, or milestone', time: 'Recently' },
    { icon: '↗', text: 'Share an achievement or learning update', time: 'This month' },
    { icon: '◎', text: 'Mention a current focus or collaboration', time: 'Ongoing' },
  ],

  // CONTACT — replace every placeholder URL before publishing your real portfolio.
  contact: {
    email: 'hello@your-domain.com',
    location: 'Your City, Country',
    availability: 'Available for freelance and full-time opportunities.',
    socials: [
      { label: 'GitHub', shortLabel: 'GH', url: 'https://github.com/your-username' },
      { label: 'LinkedIn', shortLabel: 'IN', url: 'https://linkedin.com/in/your-username' },
      { label: 'Email', shortLabel: 'EM', url: 'mailto:hello@your-domain.com' },
    ],
  },
};

// NAVIGATION — add a section here only after adding its matching id in App.tsx.
export const navigationItems = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certificates', label: 'CERTS' },
  { id: 'writing', label: 'WRITING' },
  { id: 'contact', label: 'CONTACT' },
];
