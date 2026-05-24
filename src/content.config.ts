import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writeUps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/write-ups' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(),
    readingTime: z.string(),
    author: z.object({
      name: z.string(),
      initials: z.string(),
    }),
    tags: z.array(z.string()),
    // Array of sibling post IDs (filename without extension) — auto-resolved to full post data
    related: z.array(z.string()).optional(),
    // Explicit ToC; when omitted, generated from MDX headings automatically
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
