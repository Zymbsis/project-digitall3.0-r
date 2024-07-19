import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: '/src/components',
      constants: '/src/constants',
      context: '/src/context',
      helpers: '/src/helpers',
      icons: '/src/icons',
      pages: '/src/pages',
      '@redux': '/src/redux',
      services: '/src/services',
      shared: '/src/shared',
      modules: '/src/modules',
      styles: '/src/styles',
      utils: '/src/utils',
      validationSchema: '/src/validationSchema',
    },
  },
});
