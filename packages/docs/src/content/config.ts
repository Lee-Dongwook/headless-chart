import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    nav_group: z.string(),
    nav_order: z.number().optional(),
    nav_title: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const charts = defineCollection({
  type: "content",
  schema: z.object({
    nav_group: z.string(),
    nav_order: z.number().optional(),
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
    files: z.record(z.string()),
    solved_files: z.record(z.string()).optional(),
  }),
});


export const collections = {
  docs: docs,
  charts: charts,
};
