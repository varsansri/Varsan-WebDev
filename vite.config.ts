import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base set for GitHub Pages project hosting; change if deploying to root
export default defineConfig({
  plugins: [react()],
  base: './',
})
