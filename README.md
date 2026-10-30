# ModY — Tesla Model Y accessory & mod directory

**Live site: https://mody-one.vercel.app**

An honest, no-fluff directory of Tesla Model Y accessories and mods: floor mats and liners, cargo and trunk/frunk organizers, screen protectors, sunshades, charging gear, mud flaps, lighting and more. No fake review scores, no invented prices — every listing links straight to the maker or a major retailer. A deal tracker is on the way.

| Page | URL |
|---|---|
| Home | https://mody-one.vercel.app/ |
| Accessory directory (22 picks, 10 categories) | https://mody-one.vercel.app/directory |
| Deals (coming soon) | https://mody-one.vercel.app/deals |
| About | https://mody-one.vercel.app/about |

Got a Model Y accessory you swear by? Open an issue or use the contact page and it may get added.

Keywords: Tesla Model Y accessories, Model Y mods, Model Y Juniper accessories, Model Y floor mats, Model Y frunk organizer, Model Y screen protector, Tesla accessories directory.

## How it works

Built with [Astro](https://astro.build) as a static site.

- Listings live in `src/data/listings.json`, loaded as an Astro content collection (`src/content.config.ts`).
- No prices or review scores are stored. Each listing links to the maker or a major retailer.
- Amazon affiliate links: set `AMAZON_ASSOCIATES_TAG` (e.g. `yourtag-20`) in the Vercel project env and redeploy. `src/lib/affiliate.ts` then adds `tag=` to amazon.*/amzn.to links, marks them `rel="sponsored noopener"` with an "Affiliate" label, and turns on the Amazon Associate disclosure. With the var unset, links and copy stay untagged.
- The newsletter is a placeholder (mailto). No email service provider is wired up yet.
- `robots.txt` and `sitemap.xml` live in `public/`. The `<key>.txt` file in `public/` is an IndexNow key for Bing/Yandex URL submission.

## Develop

```sh
npm install
npm run dev
npm run build   # outputs to dist/
```

Deployed on Vercel (framework preset: Astro).

*Not affiliated with Tesla, Inc.*
