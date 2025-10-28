import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For a user page like `prachuryanath.github.io`, the base should be '/'
  base: '/',
});
