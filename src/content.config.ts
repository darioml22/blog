import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    type: z.enum(['review', 'recommendation']),
    date: z.date(),
    artist: z.string().optional(),
    coverImage: z.string().optional(),
    photos: z.array(z.string()).optional(),
    audio: z.string().optional(),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/art' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = { music, art };