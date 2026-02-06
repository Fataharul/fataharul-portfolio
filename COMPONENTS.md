# Component Documentation

This document provides detailed information about each component in the portfolio.

## 📁 Component Structure

```
components/
├── Navbar.tsx                  # Navigation bar
├── Hero.tsx                    # Hero/landing section
├── About.tsx                   # About me section
├── Skills.tsx                  # Technical skills showcase
├── Projects.tsx                # Project portfolio
├── Achievements.tsx            # Awards and achievements
├── CompetitiveProgramming.tsx  # CP profile and stats
├── Contact.tsx                 # Contact information
└── Footer.tsx                  # Site footer
```

---

## 🧭 Navbar.tsx

### Purpose
Fixed navigation bar that allows users to jump to different sections.

### Features
- Fixed positioning (stays visible while scrolling)
- Background blur effect when scrolled
- Mobile responsive with hamburger menu
- Smooth scroll to sections
- Animated entrance

### Props
None (standalone component)

### State
- `isScrolled`: Boolean - tracks scroll position
- `isMobileMenuOpen`: Boolean - controls mobile menu visibility

### Customization
To add/remove nav items:
```typescript
const navItems = [
  { name: "Section Name", href: "#section-id" },
  // Add more items here
];
```

### Mobile Breakpoint
Switches to hamburger menu at `md` (768px)

---

## 🚀 Hero.tsx

### Purpose
First impression section with name, title, and main CTAs.

### Features
- Full-height viewport section
- Animated gradient background
- Floating orb animations
- Three primary CTAs
- Scroll indicator animation
- Staggered text entrance

### Key Elements
1. **Badge**: "Available for Opportunities"
2. **Name**: Large gradient text
3. **Title**: Professional title
4. **Bio**: Short description
5. **CTAs**: View Projects, Download Resume, Contact

### Customization
All text pulled from `lib/data.ts`:
```typescript
personalInfo.name
personalInfo.title
personalInfo.bio
personalInfo.resumeUrl
```

### Animation Timing
- Delays: 0.2s, 0.3s, 0.4s, 0.5s, 0.6s
- Duration: 0.6s each
- Easing: ease-out

---

## 👤 About.tsx

### Purpose
Tells the personal story and highlights key qualities.

### Layout
Two-column responsive grid:
- **Left**: 4 paragraphs of narrative
- **Right**: 4 highlight cards

### Highlights
Each card contains:
- Icon (Lucide React)
- Title
- Description

Default highlights:
1. Problem Solver
2. Full-Stack Developer
3. Detail-Oriented
4. Continuous Learner

### Customization
Edit paragraphs in `lib/data.ts`:
```typescript
export const about = {
  paragraphs: ["...", "...", "...", "..."]
};
```

To modify highlights, edit the `highlights` array in `About.tsx`.

### Animation
- InView trigger: Elements animate when scrolled into view
- Margin: -100px (triggers slightly before visible)
- Stagger: 0.1s between cards

---

## 💻 Skills.tsx

### Purpose
Showcases technical skills organized by category.

### Layout
4-column grid (responsive):
- **Programming**
- **Web Development**
- **CS & Problem Solving**
- **Tools**

### Features
- Color-coded categories
- Icon for each category
- Skill badges with hover effects
- Gradient backgrounds on hover

### Category Colors
```typescript
Programming:    emerald-500 → teal-500
Web Dev:        blue-500 → cyan-500
CS/Problem:     purple-500 → pink-500
Tools:          orange-500 → red-500
```

### Customization
All skills from `lib/data.ts`:
```typescript
export const skills = {
  programming: ["C", "C++", ...],
  webDevelopment: ["Node.js", ...],
  csAndProblemSolving: [...],
  tools: [...],
};
```

To add a new category:
1. Add to `skills` object in data.ts
2. Add to `skillCategories` array in Skills.tsx
3. Choose icon and color gradient

---

## 🎨 Projects.tsx

### Purpose
Showcases portfolio projects with descriptions and links.

### Layout
3-column responsive grid of project cards.

### Card Structure
- Icon/Logo area
- Title
- Description
- Tech stack badges
- Links (GitHub, Live Demo)

### Project Data
From `lib/data.ts`:
```typescript
{
  title: "Project Name",
  description: "What it does...",
  techStack: ["Tech1", "Tech2"],
  githubUrl: "https://...",
  liveUrl: "https://..." // optional
}
```

### Features
- Hover effects on cards
- Gradient overlay on hover
- External link icons
- Tech stack visualization
- "View More on GitHub" link

### Customization
Projects are automatically rendered from the data array. Simply add/remove/edit projects in `lib/data.ts`.

---

## 🏆 Achievements.tsx

### Purpose
Timeline display of awards and achievements.

### Layout
Vertical timeline with:
- Icon markers
- Connecting lines
- Achievement cards
- Certificate indicators

### Achievement Structure
```typescript
{
  title: "Award Name",
  year: "2024",
  description: "What was achieved",
  hasCertificate: true
}
```

### Features
- Chronological ordering
- Certificate badges
- Certificate placeholders
- Alternating animation (left/right)
- Visual timeline connector

### Customization
Edit `achievements` array in `lib/data.ts`.

To add certificate images:
1. Add image to `public/certificates/`
2. Modify the certificate placeholder section in the component

---

## 🔢 CompetitiveProgramming.tsx

### Purpose
Highlights competitive programming profile and focus areas.

### Layout
2-column grid:
- **Left**: Codeforces profile card
- **Right**: Problem-solving focus areas

### Features
- Platform branding (red-orange gradient for CF)
- External link to profile
- Focus topics list
- Animated list items

### Customization
Profile link from `lib/data.ts`:
```typescript
personalInfo.codeforces
```

Focus areas in component:
```typescript
const topics = [
  "Data Structures & Algorithms",
  "Dynamic Programming",
  // ...
];
```

---

## 📧 Contact.tsx

### Purpose
Provides multiple ways to get in touch.

### Layout
2x2 grid of contact cards plus CTA section.

### Contact Links
1. Email (mailto link)
2. GitHub
3. LinkedIn
4. Codeforces

### Features
- Large touch targets
- Platform-specific colors
- Icons for recognition
- Hover animations
- Email CTA at bottom

### Customization
All links from `lib/data.ts`:
```typescript
personalInfo.email
personalInfo.github
personalInfo.linkedin
personalInfo.codeforces
```

To add new contact method:
1. Add to `contactLinks` array
2. Import appropriate icon
3. Choose color gradient

---

## 🦶 Footer.tsx

### Purpose
Site footer with social links and copyright.

### Features
- Social icon links
- Copyright notice
- "Built with ❤️" message
- Back to top button
- Centered layout

### Elements
1. Social icon row
2. Divider line
3. Built with message
4. Copyright
5. Back to top button

### Customization
Social links from `lib/data.ts`.

To modify footer text:
```typescript
<p>Built with ❤️ using Next.js & Tailwind CSS</p>
<p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
```

---

## 🎨 Styling Patterns

### Common Patterns Used Across Components

#### Card Pattern
```typescript
className="p-6 bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all"
```

#### Section Container
```typescript
className="section-container relative z-10"
```

#### Section Title
```typescript
<h2 className="text-4xl md:text-5xl font-bold mb-4">
  Title <span className="text-gradient">Accent</span>
</h2>
```

#### Button Primary
```typescript
className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg"
```

#### Button Secondary
```typescript
className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all"
```

---

## 🎭 Animation Patterns

### InView Animation
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
```

### Stagger Animation
```typescript
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### Hover Animation
```typescript
whileHover={{ y: -5, scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## 📱 Responsive Patterns

### Grid Responsiveness
```typescript
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

### Text Size Responsiveness
```typescript
className="text-4xl md:text-5xl lg:text-6xl"
```

### Spacing Responsiveness
```typescript
className="px-6 sm:px-8 lg:px-12"
```

---

## 🔧 Props & State Management

### Component Communication
Components are currently standalone and get data from `lib/data.ts`.

### To Make Components Reusable
If you want to use these components in other projects:

```typescript
interface HeroProps {
  name: string;
  title: string;
  bio: string;
  resumeUrl: string;
}

export default function Hero({ name, title, bio, resumeUrl }: HeroProps) {
  // Component code
}
```

---

## 🚀 Performance Considerations

### Optimizations Used
1. **Lazy Loading**: InView animations prevent off-screen rendering
2. **CSS Animations**: Hardware-accelerated transforms
3. **Minimal Re-renders**: useRef for animation triggers
4. **Static Content**: No unnecessary state changes

### Best Practices
- Keep components focused (single responsibility)
- Avoid inline functions in render
- Use CSS for simple animations
- Lazy load heavy components if needed

---

## ✨ Extending Components

### Adding New Sections

1. **Create Component**
   ```typescript
   // components/NewSection.tsx
   export default function NewSection() {
     return <section id="new-section">...</section>
   }
   ```

2. **Import in Page**
   ```typescript
   // app/page.tsx
   import NewSection from "@/components/NewSection";
   ```

3. **Add to Layout**
   ```typescript
   <NewSection />
   ```

4. **Update Navigation**
   ```typescript
   // components/Navbar.tsx
   { name: "New Section", href: "#new-section" }
   ```

---

## 🎯 Component Checklist

When creating new components, ensure:
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Accessibility (semantic HTML, ARIA labels)
- [ ] Animations (entrance, hover, exit)
- [ ] TypeScript types
- [ ] Consistent styling (use design tokens)
- [ ] InView animation for sections
- [ ] Proper heading hierarchy
- [ ] Data from centralized source

---

This documentation should help you understand, modify, and extend the portfolio components effectively!
