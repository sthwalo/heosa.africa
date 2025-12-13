import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Plugin to ignore .DS_Store files in build
import type { OutputBundle, OutputOptions } from 'rollup';
const ignoreDSStore = () => ({
  name: 'ignore-ds-store',
  generateBundle(_: OutputOptions, bundle: OutputBundle) {
    for (const file of Object.keys(bundle)) {
      if (file.includes('.DS_Store')) {
        delete bundle[file];
      }
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ignoreDSStore()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  server: {
    port: 4173,
    proxy: {
      '/api': {
        target: 'https://heosa.africa',
        changeOrigin: true,
        secure: false,
      },
      // Removed /assets proxy - let Vite handle assets in development
    }
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
  },
  base: '/',
});
