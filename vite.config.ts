import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: 'dist',
    // rollupOptions: {
    //   input: {
    //     main: 'public/index.html' // root からの相対パス
    //   }
    // }
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
