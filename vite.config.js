import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // Allow external connections
    strictPort: true, // Fail if port is not available
    allowedHosts: ["react-export-test.cdsn.me"]
  },
  preview: {
    port: 5173,
    host: true, // Allow external connections
    strictPort: true, // Fail if port is not available
    allowedHosts: ["react-export-test.cdsn.me"]
  }
})
