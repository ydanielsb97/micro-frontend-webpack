import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        HumanResourcesModule: "http://localhost:3001/assets/human-resources-module.js",
        LegalModule: "http://localhost:3002/assets/legal-module.js"
      },
      shared: ["react", "react-dom", "react-router-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
