import { defineContentConfig, defineCollection, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'data',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        created: z.string(),
        updated: z.string(),
        tags: z.array(z.string()),
        content: z.string(),
      }),
    }),
    pages: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: '**/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          category: z.string(),
          created: z.string(),
          updated: z.string(),
          tags: z.array(z.string()),
          content: z.string(),
        }),
      })
    ),
  },
});
