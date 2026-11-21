# Minecraft-Themed Portfolio

## Quick Start: Personalize and Deploy

1. Edit `src/app/portfolioData.ts` to change your name, introduction, skills, projects, certificates, writing, email, and social links. The file includes comments for each content area.
2. Run `npm install` once, then `npm run dev` to preview locally.
3. Run `npm run build` before deploying. The finished static site is written to `dist/`.
4. Push this folder to a Git repository and import it in Vercel. Vercel automatically uses `npm run build` and publishes `dist/` through `vercel.json`.

The contact form sends real notifications after the Vercel environment variables below are configured. Its email link also works immediately as a fallback.

### Contact Form Notifications

The contact form now sends an email notification through `api/contact.ts` when deployed to Vercel. To activate it:

1. Create a [Resend](https://resend.com) account and create an API key.
2. In Vercel, open the project, then go to **Settings → Environment Variables**.
3. Add the three variables listed in `.env.example`: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
4. For testing, use `Your Portfolio <onboarding@resend.dev>` as `CONTACT_FROM_EMAIL`. Resend will only send test messages to your registered inbox.
5. For public use, verify your own domain in Resend and replace the sender address with your verified email domain.
6. Redeploy the site. Every completed contact form will then send you an email with a Reply-To address set to the visitor's email.

The API key is kept server-side in Vercel and is never exposed to site visitors.

A pixel-perfect, Minecraft-inspired personal portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio features smooth animations, custom Minecraft-style UI components, and a retro gaming aesthetic.

![Portfolio Preview](https://images.unsplash.com/photo-1665520937321-5388fb465942?w=800)

## 🎮 Features

- **Minecraft-Style UI**: Custom components with blocky designs and pixel-art aesthetics
- **Smooth Animations**: Powered by Motion (formerly Framer Motion)
- **Scroll Animations**: Elements reveal and parallax as you scroll
- **Custom Cursor Glow**: Interactive cursor effect that follows your mouse
- **Responsive Design**: Works on all screen sizes
- **Sidebar Navigation**: Fixed sidebar with smooth scrolling to sections
- **Multiple Sections**: Home, About, Skills, Projects, Certificates, Blog, and Contact

## 🛠️ Technologies Used

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework

### Key Packages
- **motion** (12.23.24) - Animation library for smooth transitions
- **lucide-react** - Icon library
- **Press Start 2P** (Google Font) - Retro pixel font

### UI Components
The project uses Radix UI primitives for accessible, unstyled components:
- Dialog, Popover, Tooltip, Dropdown Menu
- Select, Radio Group, Switch, Slider
- Accordion, Collapsible, Tabs
- And many more...

## 📁 Project Structure

```
/tmp/sandbox/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main application component
│   │   └── components/
│   │       ├── CertificateCard.tsx    # Certificate display component
│   │       ├── CursorGlow.tsx         # Custom cursor glow effect
│   │       ├── MinecraftButton.tsx    # Minecraft-style button
│   │       ├── MinecraftCard.tsx      # Minecraft-style card container
│   │       ├── ProjectCard.tsx        # Project showcase card
│   │       ├── ScrollReveal.tsx       # Scroll-based animations
│   │       ├── Sidebar.tsx            # Navigation sidebar
│   │       ├── SkillBar.tsx           # Skill progress bar
│   │       ├── StatBlock.tsx          # Statistics display
│   │       ├── figma/                 # Figma-imported components
│   │       └── ui/                    # Radix UI components
│   └── styles/
│       ├── fonts.css                  # Font imports
│       ├── theme.css                  # CSS variables and theme
│       ├── tailwind.css               # Tailwind base styles
│       └── index.css                  # Main CSS entry point
├── package.json                       # Dependencies and scripts
└── README.md                          # This file
```

## 🎨 Customization Guide

### 1. Personal Information

**File:** `src/app/App.tsx`

#### Change Your Name
```tsx
// Line 119
<span className="relative z-10 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.8)]">NAYAN</span>
```
Replace `NAYAN` with your name.

#### Change Your Title
```tsx
// Line 144
Master Builder & Developer
```
Replace with your desired title.

#### Change Your Bio
```tsx
// Lines 152-154
Crafting amazing worlds and building incredible creations, one block at a time.
```
Replace with your own description.

#### Change Profile Image
```tsx
// Line 99
<img
  src="https://images.unsplash.com/photo-1743247299137-98fc4e9b88b1?w=400"
  alt="Steve Character"
  className="w-full h-full object-cover pixelated"
/>
```
Replace the `src` URL with your own image URL.

---

### 2. About Section

**File:** `src/app/App.tsx` (Lines 173-214)

#### Update Your Story
```tsx
// Lines 182-188
<MinecraftCard title="My Story">
  <p className="text-lg leading-relaxed mb-4">
    Started my journey in the blocky world of Minecraft in 2011...
  </p>
  <p className="text-lg leading-relaxed">
    I specialize in creative building, redstone engineering...
  </p>
</MinecraftCard>
```
Replace the paragraphs with your own story.

#### Update Achievements
```tsx
// Lines 193-209
<ul className="space-y-3 text-lg">
  <li className="flex items-start gap-3">
    <span className="text-2xl">🏆</span>
    <span>Built over 100+ unique structures</span>
  </li>
  // Add more achievements...
</ul>
```
Modify the emoji and text for each achievement.

---

### 3. Skills Section

**File:** `src/app/App.tsx` (Lines 217-289)

#### Update Building Skills
```tsx
// Lines 226-243
<ul className="space-y-4">
  <li className="flex items-start gap-3">
    <span className="text-2xl">🏗️</span>
    <span className="font-['Press_Start_2P'] text-xs text-white">Creative Building</span>
  </li>
  // Add more skills...
</ul>
```

#### Update Technical Skills
```tsx
// Lines 249-266
<ul className="space-y-4">
  <li className="flex items-start gap-3">
    <span className="text-2xl">⚡</span>
    <span className="font-['Press_Start_2P'] text-xs text-white">Redstone Engineering</span>
  </li>
  // Add more skills...
</ul>
```

#### Update Tools & Technologies
```tsx
// Line 275
{['WorldEdit', 'VoxelSniper', 'MCEdit', 'Litematica', 'OptiFine', 'Forge', 'Bukkit', 'Spigot'].map((tool) => (
```
Replace the array with your own tools/technologies.

---

### 4. Projects Section

**File:** `src/app/App.tsx` (Lines 23-42)

#### Add/Edit Projects
```tsx
const projects = [
  {
    title: 'Redstone Computer',
    description: 'Built a fully functional calculator using redstone circuits and logic gates.',
    image: 'https://images.unsplash.com/photo-1665520937321-5388fb465942?w=400',
    technologies: ['Redstone', 'Logic Gates', 'Command Blocks'],
  },
  // Add more projects...
];
```

**Fields Explanation:**
- `title` - Project name
- `description` - Brief description of what you built
- `image` - URL to project screenshot/image
- `technologies` - Array of technologies used (appears as tags)

---

### 5. Certificates Section

**File:** `src/app/App.tsx` (Lines 44-63)

#### Add/Edit Certificates
```tsx
const certificates = [
  {
    title: 'Master Builder',
    issuer: 'Minecraft Academy',
    date: '2024',
    icon: '🏗️',
  },
  // Add more certificates...
];
```

**Fields Explanation:**
- `title` - Certificate name
- `issuer` - Organization that issued it
- `date` - Year received
- `icon` - Emoji icon to display

---

### 6. Blog Section

**File:** `src/app/App.tsx` (Lines 324-386)

#### Update Latest Post
```tsx
// Lines 335-340
<h3 className="font-['Press_Start_2P'] text-[#FFD700] text-sm leading-relaxed">
  Building in Survival Mode: A Complete Guide
</h3>
<p className="text-gray-300 leading-relaxed">
  Discover the essential techniques and strategies...
</p>
```

#### Update Post Metadata
```tsx
// Lines 344-349
<span className="font-['Press_Start_2P'] text-[#AAA] text-[0.6rem]">Mar 21, 2026</span>
<span className="font-['Press_Start_2P'] text-[#AAA] text-[0.6rem]">1.2K views</span>
```

#### Update Recent Activity
```tsx
// Lines 361-381
<div className="flex items-center gap-4 p-3 bg-[#2A2A2A] border-2 border-[#4A4A4A]">
  <span className="text-2xl">📰</span>
  <div className="flex-1">
    <p className="font-['Press_Start_2P'] text-white text-[0.65rem] leading-relaxed">Published "Building in Survival Mode"</p>
    <p className="font-['Press_Start_2P'] text-[#AAA] text-[0.6rem] mt-1">2 days ago</p>
  </div>
</div>
```

---

### 7. Contact Section

**File:** `src/app/App.tsx` (Lines 389-453)

The contact form is currently static. To make it functional:

1. Add a form handler:
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Add your form submission logic here
  // Example: Send to email service, API, etc.
};
```

2. Add the handler to the form:
```tsx
<form className="space-y-6" onSubmit={handleSubmit}>
```

3. Add state for form fields:
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});
```

---

### 8. Color Scheme

**File:** `src/styles/theme.css`

#### Primary Colors
```css
:root {
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --destructive: #d4183d;
}
```

#### Minecraft-Specific Colors
Used throughout the portfolio:
- Gold/Yellow: `#FFD700` - Headers and highlights
- Green: `#4A9D4A` - Success states and accents
- Dark Backgrounds: `#1A1A1A`, `#0A0A0A`, `#2A2A2A`
- Borders: `#4A4A4A`, `#404040`

**To change the gold color everywhere:**
```tsx
// Search for #FFD700 and replace with your color
// Common locations:
// - Section headings
// - Name in hero section
// - Button hover states
```

---

### 9. Fonts

**File:** `src/styles/fonts.css`

#### Current Font
```css
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
```

#### To Change Font:
1. Visit [Google Fonts](https://fonts.google.com/)
2. Find a font you like
3. Copy the import URL
4. Replace in `fonts.css`
5. Update font-family in components:

```tsx
// Find and replace all instances of:
font-['Press_Start_2P']
// With your font name, e.g.:
font-['Your_Font_Name']
```

---

### 10. Animations

**File:** `src/app/components/ScrollReveal.tsx`

#### Adjust Scroll Animation Speed
```tsx
// Line ~20
initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.8, delay }}
```

Change `duration` (0.1-2.0) for speed.

#### Adjust Parallax Effect
```tsx
// File: src/app/components/ScrollReveal.tsx
// Lines ~40-50
const y = useTransform(scrollY, [0, 1000], [0, speed]);
```

Change the `[0, 1000]` and `[0, speed]` values to adjust parallax intensity.

---

### 11. Sidebar Navigation

**File:** `src/app/components/Sidebar.tsx`

#### Add/Remove Navigation Items
```tsx
const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '📖' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'projects', label: 'Projects', icon: '🔨' },
  { id: 'certificates', label: 'Certificates', icon: '🏆' },
  { id: 'stats', label: 'Blog', icon: '📊' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];
```

**To add a new section:**
1. Add a new item to the `navItems` array
2. Create a corresponding section in `App.tsx` with a matching `id`

```tsx
<section id="your-new-section" className="min-h-screen py-20">
  <h2 className="font-['Press_Start_2P'] text-4xl text-[#FFD700] mb-12">
    Your Section Title
  </h2>
  {/* Your content */}
</section>
```

---

### 12. Responsive Design

The portfolio is responsive by default using Tailwind breakpoints:
- `md:` - Tablets (768px+)
- `lg:` - Desktops (1024px+)

#### Example: Adjust Grid Columns
```tsx
// Current: 2 columns on medium, 3 on large
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Change to: 1 column on medium, 2 on large
className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
```

#### Adjust Sidebar Width
```tsx
// File: src/app/components/Sidebar.tsx
// Change the width (currently 16rem = 256px)
className="fixed left-0 top-0 h-screen w-64 bg-[#1A1A1A] border-r-4 border-[#404040]"

// In App.tsx, adjust margin-left to match:
className="ml-64 p-8"
```

---

### 13. Footer

**File:** `src/app/App.tsx` (Lines 456-465)

```tsx
<footer className="py-8 border-t-[3px] border-[#404040] mt-20">
  <div className="text-center">
    <p className="font-['Press_Start_2P'] text-[#AAA] text-xs">
      Crafted with 💚 in Minecraft
    </p>
    <p className="font-['Press_Start_2P'] text-[#666] text-[0.6rem] mt-4">
      © 2025 Nayan's Portfolio. All blocks reserved.
    </p>
  </div>
</footer>
```

Update the copyright year and name.

---

## 🚀 Development

### Prerequisites
- Node.js (v18+)
- pnpm (recommended) or npm

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

### Development Server
After running `pnpm run dev`, the app will be available at `http://localhost:5173`

### Building for Production
```bash
pnpm run build
```
The built files will be in the `dist/` directory.

---

## 🎯 Quick Reference: Common Changes

### Change Background Gradient
```tsx
// File: src/app/App.tsx, Line 66
className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]"
```

### Change Button Colors
```tsx
// File: src/app/components/MinecraftButton.tsx
// Primary button (green):
bg-[#4A9D4A] hover:bg-[#5AB55A]

// Secondary button (brown):
bg-[#8B4513] hover:bg-[#A0522D]
```

### Change Card Background
```tsx
// File: src/app/components/MinecraftCard.tsx
bg-[#2A2A2A]  // Dark gray background
border-[#4A4A4A]  // Border color
```

### Disable Cursor Glow Effect
```tsx
// File: src/app/App.tsx, Line 67
// Comment out or remove:
<CursorGlow />
```

### Remove Animations
```tsx
// Replace <ScrollReveal> wrappers with regular divs
// Before:
<ScrollReveal delay={0.2}>
  <MinecraftCard>...</MinecraftCard>
</ScrollReveal>

// After:
<div>
  <MinecraftCard>...</MinecraftCard>
</div>
```

---

## 📝 Tips for Customization

1. **Test as You Go**: Save changes and check the browser to see immediate results
2. **Use Browser DevTools**: Inspect elements to find exactly what you want to change
3. **Keep Backups**: Before making major changes, save a copy of your files
4. **Consistent Colors**: Stick to your color palette for a cohesive look
5. **Responsive Testing**: Check your changes on different screen sizes
6. **Image URLs**: Use image hosting services like Unsplash, Imgur, or your own server
7. **Performance**: Optimize images before using them (compress, resize)

---

## 🐛 Common Issues

### Images Not Loading
- Check that image URLs are valid and accessible
- Use https:// URLs, not http://
- Ensure images are publicly accessible

### Font Not Showing
- Verify the Google Fonts import in `src/styles/fonts.css`
- Check that font name is correctly spelled in className

### Animations Not Working
- Ensure `motion` package is installed: `pnpm add motion`
- Check browser console for errors

### Sidebar Not Fixed
- Ensure `className="fixed"` is present on sidebar
- Check that parent containers don't have `overflow: hidden`

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Motion Documentation](https://motion.dev)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Google Fonts](https://fonts.google.com)
- [Unsplash (Free Images)](https://unsplash.com)

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🤝 Support

If you encounter any issues or have questions:
1. Check the documentation above
2. Review the code comments in the files
3. Search for similar issues online
4. Modify and experiment - that's the best way to learn!

---

**Built with ❤️ and ⛏️ in the Minecraft universe**

Happy customizing! 🎮✨
