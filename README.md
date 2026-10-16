# Jonash C. Ramirez — Portfolio

Vue 3 + Vite + Tailwind CSS v4. The whole site is built from single-file
components and Tailwind utilities — there is no hand-written legacy
`css/`, `js/`, or markup left in the project. No backend or database is
required; the site is fully static and client-side.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The optimized static site is generated in `dist/` and can be deployed to
GitHub Pages, Netlify, or any other static host.

## Project structure

```
index.html                    Vite entry shell (head metadata + #app mount point)
src/main.js                   Vue application entry
src/style.css                 Tailwind import + design tokens + base layer
src/data/portfolio.js         All portfolio content (nav, stats, certificates,
                              competitions, projects, skills, contacts)
src/composables/usePortfolio.js
                              Shared state: routing, theme, sidebar, toast
src/App.vue                   Layout shell (grid, top bar, bottom nav, toast)
src/components/               Reusable UI pieces
  AppSidebar.vue              Desktop pinned / mobile off-canvas sidebar
  MobileTopbar.vue            Fixed top bar (<= 900px) with morphing menu icon
  BottomNav.vue               Bottom tab bar (<= 640px)
  RightColumn.vue             Skill Set / Expertise / Get in touch + About panels
  HeroBanner.vue              Hero slideshow + typewriter greeting + date pill
  StatsGrid.vue               Career stats with count-up animation
  FeaturedRow.vue             Scroll-snap featured carousel
  SkillMarquee.vue            Infinite two-row skill marquee
  ExpertiseList.vue           Accordion
  TimelineList.vue            Education / Experience timeline
  CertGrid.vue, CertCard.vue  Certificate & award cards
  CertList.vue                Certificate list (About page)
  ProjectGrid.vue             Project cards + Load More
  PanelCard.vue               Shared card shell with optional heading
  MenuIcon.vue                Animated hamburger <-> close icon
  pages/                      PageHome, PageAbout, PageAchievements,
                              PageProjects, PageBlogs
public/img/                   All image assets (served as `img/...`)
```

## Theming

All design tokens live in `src/style.css` as CSS custom properties on
`:root`, with the light-mode overrides on `body.light`. `@theme inline`
maps those tokens to Tailwind utilities, so `bg-panel`, `text-dim`,
`border-line`, `rounded-card`, etc. follow the active theme automatically.
The dark/light toggle uses the View Transitions API for a circular
clip-path reveal, with an instant fallback where it is unsupported.

## Notes

- All content is client-side; no backend or API is configured.
- Edit `src/data/portfolio.js` to change any text, link, certificate,
  award, project, or skill. Drop new images into `public/img/` and keep
  the `img/...` paths in that file.
- Custom responsive breakpoints (`d401`, `d641`, `d901`, `d1101`, `d1281`)
  are defined in `src/style.css` and mirror the original layout thresholds.
