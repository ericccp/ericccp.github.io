// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://ericccp.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  integrations: [
    mdx()
  ],
  adapter: node({
    mode: 'standalone'
  })
});