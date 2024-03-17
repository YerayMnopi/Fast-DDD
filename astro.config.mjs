import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://yeraymnopi.github.io/',
  base: '/Fast-DDD',
  integrations: [tailwind(), icon()]
});