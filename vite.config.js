import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0', // 允许外部访问（WSL / 局域网）
    port: 5173,
    hmr: {
      host: 'localhost', // 浏览器访问地址，WSL 下通常写 localhost
      protocol: 'ws'     // 默认 ws，也可以改 wss
    }
  }
})
