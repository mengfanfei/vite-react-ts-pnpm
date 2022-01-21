import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
// @ts-ignore
import pxtovw from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 49', 'safari >= 10', 'ios >= 10']
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtovw({
          viewportWidth: 375
        })
      ]
    }
  }
})
