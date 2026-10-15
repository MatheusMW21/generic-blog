# matheuspinheiro.dev

Personal portfolio built with a terminal/CLI aesthetic.

**Live:** [matheuspinheiro.dev](https://matheuspinheiro.dev)

## Stack

- [Astro](https://astro.build) — static site framework
- TypeScript
- CSS (no framework)

## Features

- Terminal-style UI with dark/light theme
- i18n (pt/en) via Astro's built-in routing
- Responsive layout

## Project structure

```
src/
├── components/
│   ├── Header.astro        # nav, theme/lang toggles
│   ├── HomeContent.astro   # bio, skills, experience, contact
│   └── ProjectsContent.astro
├── data/
│   ├── profile.js          # personal info and experience
│   ├── projetos.js         # projects list
│   └── skills.js           # tech stack
├── i18n/
│   └── ui.ts               # translation strings
├── layouts/
│   └── Layout.astro        # base HTML, titlebar
├── pages/
│   ├── index.astro         # / (pt)
│   ├── projetos.astro      # /projetos (pt)
│   └── en/
│       ├── index.astro     # /en
│       └── projetos.astro  # /en/projects
└── styles/
    └── global.css
```

## Running locally

```sh
npm install
npm run dev
```
