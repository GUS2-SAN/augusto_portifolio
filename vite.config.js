import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(__dirname, 'index.html'),
        demoTcg: resolve(__dirname, 'demo-tcg/index.html'),
        demoTcgCart: resolve(__dirname, 'demo-tcg/carrinho.html'),
      },
    },
  },
})
