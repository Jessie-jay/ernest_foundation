# Ernest Chianumba Foundation Website

A modern, responsive website for the Ernest Chianumba Foundation built with Next.js 16, TypeScript, and Tailwind CSS.

## 🎨 Design Features

The homepage features a clean, modern design inspired by contemporary charity websites with:

- **Hero Section**: Eye-catching introduction with overlapping images and statistics
- **Mission Section**: Clear communication of the foundation's purpose with visual icons
- **Values Section**: Blue gradient section highlighting core programmes  
- **Programmes Section**: Three featured programme cards with hover effects
- **Impact Section**: Vision statement with checkmark features and call-to-action banner
- **Transparency Section**: Trust indicators showing registration and accountability
- **CTA Section**: Final conversion section encouraging donations
- **Footer**: Comprehensive navigation and contact information

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.8 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: DM Serif Display (headings) and Inter (body)
- **Icons**: Inline SVG components

## 🎨 Design System

This project uses a comprehensive design system with CSS custom properties (variables) for consistency and maintainability.

### Key Resources

- **[Complete Design System Documentation](./DESIGN_SYSTEM.md)** - Full specification with all tokens
- **[Quick Reference Guide](./docs/DESIGN_TOKENS_QUICK_REFERENCE.md)** - Cheat sheet for developers  
- **[Style Guide Page](http://localhost:3001/style-guide)** - Visual browser of all design tokens
- **[Design Tokens Module](./lib/design-tokens.ts)** - TypeScript/JavaScript exports

### Design Tokens Include

- **Colors**: 150+ semantic colors (Primary, Secondary, Accent, Neutrals, Status)
- **Typography**: Type scale, font families, line heights
- **Spacing**: Consistent spacing scale (4px to 160px)
- **Layout**: Container sizes, grid system
- **Shadows**: 5-level elevation system
- **Motion**: Duration and easing curves
- **Components**: Button styles, border radius, z-index layers

### Quick Example

```css
.button {
  background: var(--color-accent-400);
  color: var(--color-dark-900);
  padding: 0 var(--button-padding-x);
  height: var(--button-height-md);
  border-radius: var(--button-radius);
  font-family: var(--font-body);
  transition: all var(--duration-fast) var(--ease-standard);
}
```

## 🎨 Brand Colors

- **Primary Blue**: #0876C9
- **Secondary Green**: #27C83E  
- **Accent Yellow**: #FFD83D
- **Dark**: #071A2B
- **Ink**: #101828
- **Charcoal**: #344054

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   └── Card.tsx        # Programme card component
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   └── sections/
│       ├── HeroSection.tsx
│       ├── MissionSection.tsx
│       ├── ValuesSection.tsx
│       ├── ProgrammesSection.tsx
│       ├── ImpactSection.tsx
│       ├── TransparencySection.tsx
│       └── CTASection.tsx
├── data/
│   └── foundation-info.ts  # Foundation information and content
├── public/
│   ├── Logo/               # Foundation logos
│   └── Images/             # Hero and section images
└── lib/
    └── utils/
        └── cn.ts           # Utility functions
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Pages

- **Homepage** (`/`): Full landing page with all sections

## ✨ Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Hover effects and animations
- Accessible navigation with mobile menu
- Optimized images with Next.js Image component
- SEO-friendly structure
- Fast page loads with static generation

## 📝 Content Management

All foundation content is centralized in `data/foundation-info.ts` including:
- Legal information
- Contact details
- Mission & vision
- Core values
- Programmes
- Governance structure

## 🎯 Next Steps

1. Add donation integration (Paystack/Flutterwave)
2. Create individual programme pages
3. Build blog/news section
4. Add contact form
5. Implement CMS for content updates
6. Add photo gallery
7. Create volunteer application form

## 📄 License

© 2026 Ernest Chianumba Foundation. All rights reserved.
