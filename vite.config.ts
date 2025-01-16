import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 4173,
    proxy: {
      '/api': {
        target: 'https://heosa.africa',
        changeOrigin: true,
        secure: false,
      },
      '/assets': {
        target: 'https://heosa.africa',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  base: process.env.NODE_ENV === 'production' 
    ? 'https://heosa.africa/' 
    : '/',
});
