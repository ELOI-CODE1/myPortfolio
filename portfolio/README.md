# IZABAYO Eloi — Portfolio

Personal portfolio of **IZABAYO Eloi**, a full-stack developer. Built with **Angular 21**
(standalone components + signals), **server-side rendering** via `@angular/ssr` + Express,
and styled with **Tailwind CSS**. Deployed on **Vercel**.

## Sections
Single-page site: Hero · About · Skills · Projects · Contact — all in a dark, neon-cyan theme
with scroll-reveal animations.

Community & Open Source
-----------------------

I am an active open-source contributor and a member of Open Source Kigali. I regularly contribute to
community projects, mentor newcomers, and collaborate on open tools and resources.

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
The Vercel **Root Directory** is set to `portfolio` (this app lives in that subfolder) to open it u have to enter in that folder.
