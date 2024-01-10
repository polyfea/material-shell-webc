import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,    
    outDir: '.md',
    lib: {
      entry: 'src/global/material-common.ts',
      name: 'material-common',
      fileName: 'material-common',
    }
  }
});