import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: [
      "hp15da0011la",
      "hp15da0011la.local"
    ],
    host: '0.0.0.0',
    cors: true,
    port: 3173,
  },
  server: {
    allowedHosts: [
      "hp15da0011la",
      "hp15da0011la.local"
    ],
    watch: { usePolling: true },
    host: '0.0.0.0',
    cors: true,
    port: 2173,
  },
})

// https://vite.dev/config/