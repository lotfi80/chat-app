import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Wenn du den Server-Port auf 5173 setzen willst, kannst du ihn hier angeben
  server: {
    port: 5173,  // Standardmäßig läuft Vite auf Port 5173
  }
})
