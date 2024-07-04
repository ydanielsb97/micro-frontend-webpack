import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./store": "./src/store",
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  }
})
