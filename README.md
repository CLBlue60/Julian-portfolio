# JL Media — Julian's Photography Portfolio

A Next.js + Sanity photography portfolio with a responsive gallery, lightbox (Framer Motion), contact section, and an optional embedded Sanity Studio.

## Features
- Dynamic gallery powered by Sanity
- Lightbox / animated gallery (framer-motion)
- Glassmorphism UI with Tailwind CSS
- Optional embedded Sanity Studio at `/studio`
- Mobile-responsive layout and components

## Quick start

1. Install dependencies
```bash
npm install
```

2. Run development server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
npm start
```

## Environment variables

Set these in `.env.local` (or in your deployment platform):

- NEXT_PUBLIC_SANITY_PROJECT_ID — your Sanity project ID (example: `5cfj6cgg`)
- NEXT_PUBLIC_SANITY_DATASET — dataset name (example: `production`)
- NEXT_PUBLIC_SANITY_API_VERSION — optional API version (e.g. `2025-01-01`)

If these are not set, defaults in the code may be used. Ensure values match your Sanity project.

## Sanity

- Sanity Studio config: `sanity.config.ts`
- Sanity document schema includes a `photo` document type.
- Add your deployed domain to Sanity CORS origins (Project → API → CORS origins) to allow client requests from production.

## Important files
- App entry & layout: `src/app/page.tsx`, `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Gallery: `src/components/Gallery.client.tsx`
- Header / About: `src/components/HeaderSection.client.tsx`
- Contact hero: `src/components/ContactHero.client.tsx`
- Sanity client & helpers: `src/lib/sanity.ts` (or similar)
- Next config (images): `next.config.ts`
- Package scripts: `package.json`

## Deployment notes
- Configure environment variables in your host (Vercel, Netlify, etc.).
- Ensure `cdn.sanity.io` is allowed in `next.config.ts` remotePatterns for Next/Image optimization.
- If embedding Sanity Studio under Next, prefer a client-only mount to avoid SSR bundling issues. Alternatively, run Studio separately with `sanity start`.

## Troubleshooting

- Images not loading in production:
  - Confirm Sanity project ID / dataset env vars.
  - Add your production domain to Sanity CORS origins.
  - Check `next.config.ts` remotePatterns include `cdn.sanity.io`.

- Sanity Studio build errors like `createContext is not a function`:
  - Avoid importing Studio server-side; mount it client-side with dynamic import or run Studio separately.

- Framer Motion deprecation:
  - Replace `motion(Component)` with `motion.create(Component)` where applicable.

## Contributing
Open issues or pull requests for fixes and improvements.
