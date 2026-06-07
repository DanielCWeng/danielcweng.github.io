import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pieces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pieces' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['active', 'closed']).default('active'),
    threat_level: z.number().optional(),
    summary: z.string(),
    pdf: z.string().optional(),
    tex: z.string().optional(),
  }),
});

export const collections = { pieces };
