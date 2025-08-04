// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stevebrownlee.github.io',
  base: '/world-of-ilyr',
  vite: {
    plugins: [tailwindcss()]
  }
});