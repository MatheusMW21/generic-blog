import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const artigos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artigos" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    publicadoEm: z.date(),
  }),
});

export const collections = { artigos };
