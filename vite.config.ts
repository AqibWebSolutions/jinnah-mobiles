import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // Determine base path for GitHub Pages:
  // - If running in GitHub Actions, GITHUB_REPOSITORY is provided as 'owner/repo-name'
  // - Allow manual override via VITE_BASE or BASE_URL
  // - In production, default to '/jinnah-mobile/'
  // - In dev mode, use '/' for local development and preview
  let base = '/';
  if (mode === 'production') {
    if (process.env.GITHUB_REPOSITORY) {
      const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
      base = repo ? `/${repo}/` : '/jinnah-mobile/';
    } else if (process.env.VITE_BASE) {
      base = process.env.VITE_BASE;
    } else if (process.env.BASE_URL) {
      base = process.env.BASE_URL;
    } else {
      base = '/jinnah-mobile/';
    }
  }

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
