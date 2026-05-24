import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writeUps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/write-ups' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    date: z.string(),
    readingTime: z.string(),
    author: z.object({
      name: z.string(),
      initials: z.string(),
    }),
    tags: z.array(z.string()),
    prev: z
      .object({
        slug: z.string(),
        title: z.string(),
      })
      .optional(),
    next: z
      .object({
        slug: z.string(),
        title: z.string(),
      })
      .optional(),
    related: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          readingTime: z.string(),
          category: z.string(),
          href: z.string(),
        })
      )
      .optional(),
    toc: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
          level: z.number(),
        })
      )
      .optional(),
  }),
});

export const collections = { 'write-ups': writeUps };
