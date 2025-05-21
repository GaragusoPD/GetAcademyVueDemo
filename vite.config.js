import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // Automatically open the app in the browser
    open: true, 
  },
  resolve: {
    // Aliases for easier imports
    alias: {  
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@views': '/src/views',
      '@stores': '/src/stores',
      '@routes': '/src/routes',
      '@services': '/src/services',
    },
  },
})
