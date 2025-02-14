import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './example/aframe-google-maps-aerial.js',  // You'll need to create this entry file
      name: 'AFrame3DTilesRenderer',
      fileName: 'aframe-3dtilesrendererjs',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['three'],
      output: {
        globals: {
          three: 'THREE'
        }
      }
    }
  }
});