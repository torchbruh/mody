import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const listings = defineCollection({
  loader: file('src/data/listings.json'),
  schema: z.object({
    name: z.string(),
    brand: z.string(),
    category: z.string(),
    fit: z.string(),
    forWho: z.string(),
    note: z.string(),
    url: z.string().url(),
    source: z.string(),
  }),
});

export const collections = { listings };
