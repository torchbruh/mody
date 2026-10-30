# ModY

An honest directory of Tesla Model Y accessories and mods, with a deal tracker coming soon. Built with [Astro](https://astro.build) as a static site.

- Listings live in `src/data/listings.json`, loaded as an Astro content collection (`src/content.config.ts`).
- No prices or review scores are stored. Each listing links to the maker or a major retailer.
- The newsletter is a placeholder (mailto). No email service provider is wired up yet.

## Develop

```sh
npm install
npm run dev
npm run build   # outputs to dist/
```

Deployed on Vercel (framework preset: Astro).
