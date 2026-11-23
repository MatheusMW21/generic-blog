# matheuspinheiro.dev

Personal portfolio built with a terminal/CLI aesthetic.

**Live:** [matheuspinheiro.dev](https://matheuspinheiro.dev)

## Stack

- [Astro](https://astro.build) 7 — static site framework
- TypeScript
- GSAP — entrance animations + ScrollTrigger
- CSS (no framework)

## Features

- Terminal-style UI with dark/light theme toggle
- i18n (pt/en) via Astro's built-in routing
- View Transitions (smooth page navigation)
- Interactive CLI terminal modal (`$` at the bottom of the page)
- Contact form via Formspree (AJAX, no redirect)
- Availability indicator (freelance status)
- Sitemap + robots.txt
- OG image meta tags
- Responsive layout

## Project structure

```
src/
├── components/
│   ├── Header.astro          # nav, hero, theme/lang toggles
│   ├── HomeContent.astro     # bio, skills, experience, contact + modals
│   └── ProjectsContent.astro
├── data/
│   ├── profile.js            # personal info, experience, availability flag
│   ├── projetos.js           # projects list
│   └── skills.js             # tech stack
├── i18n/
│   └── ui.ts                 # translation strings
├── layouts/
│   └── Layout.astro          # base HTML, titlebar, GSAP init
├── pages/
│   ├── index.astro           # / (pt)
│   ├── projetos.astro        # /projetos (pt)
│   └── en/
│       ├── index.astro       # /en
│       └── projetos.astro    # /en/projects
└── styles/
    └── global.css
```

## Running locally

```sh
npm install
npm run dev
```

## Content updates

Personal info, stack and projects live in `src/data/`. Availability for freelance is a single flag in `profile.js`:

```js
export const profile = {
  available: true, // set to false to hide the indicator
  ...
}
```
