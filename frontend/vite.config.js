import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const BUILD_DIR = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: BUILD_DIR,
    emptyOutDir: true, // Xóa thư mục trước khi build
    assetsDir: '',
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx')
      }
    },
  }
})
