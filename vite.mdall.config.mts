import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: '.md',
    lib: {
        entry: 'src/global/material-all.ts',
        name: 'material-all',
        fileName: 'material-all',
        }
}
});