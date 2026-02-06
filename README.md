# Portfolio Website - MD Fataharul Islam

A modern, professional developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, elegant design inspired by nuxt.com with custom branding
- **Responsive**: Fully responsive on all device sizes
- **Dark Mode**: Beautiful dark theme by default
- **Smooth Animations**: Subtle, professional animations using Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Type-Safe**: Built with TypeScript for better development experience

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 🏗️ Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and design system
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Achievements.tsx    # Achievements timeline
│   ├── CompetitiveProgramming.tsx  # CP section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── lib/
│   ├── data.ts             # Portfolio data
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or download the repository**

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🛠️ Customization

### Update Personal Information

Edit the `lib/data.ts` file to customize:

- Personal information (name, email, social links)
- Skills
- Projects
- Achievements
- About section content

### Update Resume Link

In `lib/data.ts`, update the `resumeUrl` field:

```typescript
export const personalInfo = {
  // ...
  resumeUrl: "/path/to/your/resume.pdf", // Update this
};
```

### Add Certificate Images

1. Place certificate images in the `public/certificates/` directory
2. Update the achievements section in `components/Achievements.tsx` to display images

### Customize Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 142 76% 36%;  /* Primary color */
  --accent: 142 76% 36%;   /* Accent color */
  /* ... other colors */
}
```

### Modify Sections

Each section is a separate component in the `components/` directory. You can:
- Add new sections
- Remove existing ones
- Reorder sections in `app/page.tsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The portfolio can be deployed on:
- Netlify
- Railway
- AWS Amplify
- Any platform supporting Next.js

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✨ Design Decisions

### Color Palette
- **Primary**: Emerald green (#22c55e) - represents growth and technology
- **Background**: Deep dark (#0a0a0a) - professional and modern
- **Accents**: Subtle gradients for depth without distraction

### Typography
- **Font**: Inter - clean, professional, excellent readability
- **Hierarchy**: Clear distinction between headings and body text
- **Line Height**: Generous spacing for easy reading

### Animations
- **Entrance**: Fade and slide animations for sections
- **Hover**: Subtle lift and color transitions
- **Scroll**: Smooth scrolling between sections
- **Performance**: CSS-first animations, minimal JavaScript

### Layout
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Grid**: Responsive grid layouts for cards and content
- **Container**: Max-width container with responsive padding

### Accessibility
- Semantic HTML elements
- ARIA labels for icon buttons
- Sufficient color contrast
- Keyboard navigation support

## 🔧 Configuration Files

- **tailwind.config.ts**: Tailwind CSS configuration with custom theme
- **tsconfig.json**: TypeScript compiler options
- **next.config.js**: Next.js configuration
- **postcss.config.js**: PostCSS plugins configuration

## 📄 License

This portfolio template is free to use and modify for personal projects.

## 🤝 Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Explore [Framer Motion docs](https://www.framer.com/motion/)

## 🎯 Performance Tips

1. **Images**: Use Next.js Image component for automatic optimization
2. **Fonts**: Font preloading is handled automatically
3. **Code Splitting**: Automatic with Next.js App Router
4. **Analytics**: Add analytics in `app/layout.tsx`

## 📈 Future Enhancements

Potential additions:
- Blog section with MDX
- Dark/Light theme toggle
- Contact form with backend integration
- Project filtering and search
- Testimonials section
- Analytics dashboard

---

Built with ❤️ by MD Fataharul Islam
