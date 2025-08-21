# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal landing page portfolio built with React and TypeScript. It's a Create React App project that showcases professional experience, skills, and testimonials. The site appears to be for "Gutu" (Augusto Galuppo) and includes sections for experience, quotes from colleagues, and a contact form.

## Commands

### Development
- `pnpm start` - Start development server at http://localhost:3000
- `pnpm build` - Build for production
- `pnpm test` - Run tests in watch mode
- `npx tsc --noEmit` - Run TypeScript type checking
- `npm run eject` - Eject from Create React App (irreversible)

### Package Management
The project uses pnpm (evidenced by pnpm-lock.yaml), so prefer `pnpm` commands over `npm`.

## Architecture

### Tech Stack
- **Frontend**: React 19.1.0 with TypeScript 4.9.5
- **Styling**: Material-UI (@mui/material) with Emotion for styled components
- **Animation**: Framer Motion for animations, react-scroll-parallax for parallax effects
- **Testing**: React Testing Library with Jest
- **Build Tool**: Create React App (react-scripts)

### Project Structure
```
src/
├── App.tsx                 # Main app component with theme provider and routing
├── components/             # Feature-based component organization
│   ├── Header/            # Navigation with expandable menu
│   ├── HeroSection/       # Landing section
│   ├── Experience/        # Professional experience timeline
│   ├── SkillSphere/       # Skills visualization component
│   ├── Quotes/            # Testimonials from colleagues
│   ├── Form/              # Contact form
│   └── Footer/            # Footer with social links
├── assets/images/         # Static images organized by section
├── types.ts              # TypeScript type definitions
└── TestParallax.tsx      # Currently active test component
```

### Component Architecture
- Each component folder follows a consistent structure:
  - `ComponentName.tsx` - Main component file
  - `styled.ts` - Material-UI styled components
  - `index.ts` - Barrel export
- Uses Material-UI's styled API with TypeScript for consistent styling
- Components are exported from `components/index.ts` for clean imports

### Styling Approach
- Material-UI theme customization with custom color palette:
  - Primary: #3B82F6 (blue)
  - Secondary: #F59E0B (amber) 
  - Background: rgb(219, 219, 213) (light beige)
- Typography: Inter, Instrument Serif, Roboto fallback
- Styled components pattern using `@mui/material/styles`

### Data Management
- Quote testimonials stored in `src/components/Quotes/quotesData.ts`
- TypeScript interfaces defined in `src/types.ts` (e.g., ExperienceProps)
- Static asset management through organized folder structure

### Current Development State
- Main components are currently commented out in App.tsx
- `TestParallax` component is active, suggesting ongoing parallax development
- Recent commits show work on quotes section and image assets

### Key Features
- Parallax scrolling effects via react-scroll-parallax
- Expandable navigation menu with smooth transitions
- Responsive design using Material-UI breakpoints
- Professional portfolio sections (experience, skills, testimonials)
- Multi-language support (English/Portuguese) in testimonials