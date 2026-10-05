import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Two pages side by side so relative asset paths and the QR link work from any host/sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
  // `npm run dev` serves the UI; /api calls go to `npm run dev:api` (Cloudflare Functions on :8788).
  server: { proxy: { '/api': 'http://localhost:8788' } },
  build: {
    rollupOptions: {
      input: {
        guest: resolve(import.meta.dirname, 'index.html'),
        owner: resolve(import.meta.dirname, 'owner.html'),
      },
    },
  },
});
