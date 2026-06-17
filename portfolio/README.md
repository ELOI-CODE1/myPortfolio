# IZABAYO Eloi — Portfolio

Personal portfolio of **IZABAYO Eloi**, a full-stack developer. Built with **Angular 21**
(standalone components + signals), **server-side rendering** via `@angular/ssr` + Express,
and styled with **Tailwind CSS**. Deployed on **Vercel**.

## Sections
Single-page site: Hero · About · Skills · Projects · Contact — all in a dark, neon-cyan theme
with scroll-reveal animations.

## Development

```bash
npm install
npm start          # dev server at http://localhost:4200
```

## Build & SSR

```bash
npm run build                 # outputs to dist/portfolio/
npm run serve:ssr:portfolio   # runs the SSR server
```

## Deployment
Hosted on Vercel with the GitHub repository connected — every push to `main` auto-deploys.
The Vercel **Root Directory** is set to `portfolio` (this app lives in that subfolder).
