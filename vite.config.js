// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CP05WEBDEV-main/', // Substitua 'my-app' pelo nome do seu repositório
});
