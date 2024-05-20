import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), vercel()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  assetsInclude: [
    '**/*.png',
    '**/*.jpg',
    '**/*.JPG',
    '**/*.jpeg',
    '**/*.svg',
    '**/*.md',
    '**/*.mp4',
    '**/*.json',
  ],
  build: {
    rollupOptions: {
      external: /\\*\.(py|json|png|jpg|JPG|jpeg|md|mp4)/,
    },
  },
});
