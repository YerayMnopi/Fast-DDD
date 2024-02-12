import { defineConfig } from 'astro/config';
import { z, defineCollection } from 'astro:content';
import tailwind from "@astrojs/tailwind";


const courseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  })
});

export const collections = {
  'course': courseCollection,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://yeraymnopi.github.io/',
  base: '/Fast-DDD',
  integrations: [tailwind()]
});
