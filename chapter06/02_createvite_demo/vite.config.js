import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-app',
  build: {
    outDir: 'build',//指定打包输出的目录名，默认是dist（相对于项目根目录）
    assetsDir: 'static',//知道静态资源存放目录（相对于build.outDir）,默认是assets
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
