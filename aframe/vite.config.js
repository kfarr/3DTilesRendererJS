import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'aframe3DTilesRenderer',
      fileName: 'aframe-3d-tiles-renderer'
    },
    rollupOptions: {
      external: ['three', 'aframe'],
      output: {
        globals: {
          three: 'THREE',
          aframe: 'AFRAME'
        }
      }
    }
  },
  server: {
    open: '/examples/index.html'
  }
});
