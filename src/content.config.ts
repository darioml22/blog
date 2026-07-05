import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    artist: z.string().optional(),
    date: z.date(),
    type: z.enum(['review', 'recommendation']),
    coverImage: z.string().optional(),
  }),
});

export const collections = { music };