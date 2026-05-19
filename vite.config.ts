import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Carpeta de salida para producción (Vercel usa "dist" por defecto)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
