import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: {
      overlay: true, // Enables the error overlay for debugging
    },
    port: 5173, // Default port for Vite
    open: true, // Automatically opens the app in the browser
  },
});