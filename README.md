# NutritionConnect AI

A React + Vite single-page app. This used to be 7 standalone static HTML
files with separate CSS/JS; it's now one real front-end project with proper
routing, a Home page, and every page linked together.

## Why React instead of plain HTML/CSS/JS

Plain HTML/CSS/JS works for a handful of static pages, but this app needs
shared navigation, state that survives moving between pages, and reusable
UI — that gets messy fast without a framework and a build tool. React +
Vite gives you:
- One dev server with instant hot-reload (`npm run dev`)
- Real client-side routing between all 8 pages (no full page reloads)
- A component model so shared pieces (nav, toasts) live in one place
- A proper `npm run build` step that outputs an optimized `dist/` folder

## What changed from the original static prototype

- All 7 original pages are now routed pages inside one app (see **Routes**
  below), plus a new **Home** page (`/`) that links to everything.
- Every "Get Started" / "Submit" / sidebar navigation link that used to
  point at a `.html` file (or was a decorative `href="#"` placeholder) now
  actually navigates within the app — nothing dead-ends anymore.
- A small floating menu (bottom-right "apps" button, on every page) lets
  you jump straight to any of the 8 pages at any time.
- Added `.env` / `.env.example` and `.gitignore` for a normal Node project
  setup.
- The original page markup, styling, and prototype interactivity (search,
  filters, form validation, toasts, the two-step assessment form, etc.)
  were preserved as-is — only the navigation layer was rewired.

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (includes `npm`)

Check what you have installed:
```bash
node -v
npm -v
```

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template (edit values if you add a real backend later)
cp .env.example .env

# 3. Start the dev server
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open it in
your browser. Changes to any file are reflected instantly.

### Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # serve the production build locally to check it
```

`dist/` can be deployed to any static host (Vercel, Netlify, GitHub Pages,
etc.) — the app uses hash-based routing (`/#/food-database`) specifically
so it works correctly on static hosts with no extra server configuration.

## Routes

| Path                    | Page                              |
|--------------------------|------------------------------------|
| `/`                      | Home (new)                        |
| `/landing`                | Marketing / about page            |
| `/role-selection`         | Role selection                    |
| `/pregnancy-assessment`   | Pregnancy nutrition assessment    |
| `/icds-dashboard`         | ICDS worker dashboard             |
| `/asha-mobile`            | ASHA worker mobile view           |
| `/food-database`          | Nutrition guide / food database   |
| `/admin-analytics`        | Admin analytics dashboard         |

## Project structure

```
├── index.html                 # Vite entry HTML (Tailwind CDN, fonts, shared scripts)
├── public/
│   ├── logo.png
│   └── legacy-js/              # original page scripts, adapted to be re-run per route
├── src/
│   ├── main.jsx                # React root + HashRouter
│   ├── App.jsx                 # route table
│   ├── AppNav.jsx               # floating "jump to any page" menu
│   ├── pages/
│   │   ├── Home.jsx             # new, real React home page
│   │   ├── LegacyPage.jsx       # wrapper that mounts a legacy page + reruns its JS
│   │   ├── Landing.jsx, RoleSelection.jsx, ...  # one per original page
│   │   └── fragments/*.html     # original page markup, extracted
│   └── styles/*.css             # original per-page + shared CSS, unchanged
├── .env / .env.example
└── .gitignore
```

## Using Antigravity (or another AI IDE) on this project

This is now a standard Node.js project, so any AI coding tool — including
[Google Antigravity](https://antigravity.google), Cursor, or Claude Code —
can open this folder directly and work with it like any other React app:
`npm install`, then point the agent at `src/`. There's nothing special to
configure.

## Notes

- This is still a front-end-only prototype — there's no real backend, so
  search/filter/forms work against the data already present on each page.
- `VITE_API_BASE_URL` in `.env` is a placeholder for when a real backend
  gets added; nothing reads it yet.
