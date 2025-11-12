import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vikas-portfolio/', // ✅ keep the trailing slash (this is correct)
})
