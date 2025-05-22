import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwind()
  ],
  base: './', // Use relative paths
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false
  }
});