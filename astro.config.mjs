import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://obowersa.net',
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    '/notes': {
      status: 302,
      destination: 'https://publish.obsidian.md/obowersa/Notes+Overview'
    }
  }
});