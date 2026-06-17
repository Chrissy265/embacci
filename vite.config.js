import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// EMBACCI International — React + Vite
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
})
