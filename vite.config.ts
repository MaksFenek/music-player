/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import suidPlugin from '@suid/vite-plugin';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin(), suidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: [
      { find: 'shared', replacement: path.resolve(__dirname, './src/shared') },
      { find: 'app', replacement: path.resolve(__dirname, './src/app') },
      { find: 'widgets', replacement: path.resolve(__dirname, './src/widgets') },
      { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: 'features', replacement: path.resolve(__dirname, './src/features') },
    ],
  },
});
