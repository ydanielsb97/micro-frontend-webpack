import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "legal-module",
      filename: "legal-module.js",
      exposes: {
        "./LegalPage": "./src"
      },
      shared: ["react", "react-dom", "react-router-dom"]
    })
  ],
  build: {
    target: "esnext" // browsers can handle the latest ES features
  }
})
