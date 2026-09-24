import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // Base path for GitHub Pages:
  // In development, serve at '/'
  // In production for GitHub Pages (AqibWebSolutions/jinnah-mobiles), use '/jinnah-mobiles/'
  const base = mode === 'development' ? '/' : (process.env.VITE_BASE || '/jinnah-mobiles/');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
