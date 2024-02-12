import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  site: 'https://yeraymnopi.github.io/',
  base: '/Fast-DDD',
  integrations: [tailwind()]
});
