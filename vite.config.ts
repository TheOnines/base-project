import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ], resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    port: 9527,
    host: '0.0.0.0',
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://172.16.36.232:30495',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, "")
    //   }
    // },
    cors: true
  },

})
