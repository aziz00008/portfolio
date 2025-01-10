import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/portfolio', // Replace 'repository' with your repo nam
  plugins: [react()],
})
