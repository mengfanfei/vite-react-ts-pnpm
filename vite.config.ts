import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import viteSvgIcons from 'vite-plugin-svg-icons'
import {resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 49', 'safari >= 10', 'ios >= 10']
    }),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/members': {
        target: 'https://hwdpfw.zhongyijiutai.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/members/, '/members')
      }
    }
  }
})
