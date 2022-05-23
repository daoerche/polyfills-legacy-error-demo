import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['chrome >= 53'], //The rendering engine of QQ browser version 9.7 is Chrome 53
      externalSystemJS: false
    })
  ]
})
