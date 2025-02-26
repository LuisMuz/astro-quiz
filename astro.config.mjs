import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
      react(),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: vercel(),
});