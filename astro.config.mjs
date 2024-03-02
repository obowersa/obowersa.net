import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkCalloutDirectives from "@microflash/remark-callout-directives"
import remarkDirective from 'remark-directive';
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: 'https://obowersa.net',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "contents" }], remarkDirective, remarkCalloutDirectives],
  },
});