import { defineContentConfig, defineCollection } from "@nuxt/content";
import { defineSitemapSchema } from "@nuxtjs/sitemap/content";

import { z } from "zod";
export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        created: z.iso.date(),
        sitemap: defineSitemapSchema()
      })
    })
  }
});
