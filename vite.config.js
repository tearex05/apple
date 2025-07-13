// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace "your-username" and "your-repo" below
export default defineConfig({
  base: '/apple/',
  plugins: [react()],
})
