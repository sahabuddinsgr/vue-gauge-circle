import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      // Specify the entry point of your library
      entry: fileURLToPath(new URL('./src/index.js', import.meta.url)),
      // Output name for the library
      name: 'VueCircleProgress',
      // Output file format
      formats: ['es', 'umd'],
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        // Global variable name for UMD builds
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
