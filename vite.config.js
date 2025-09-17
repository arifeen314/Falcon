import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: './',
=======
  base: './',  // ensures Vite works with nested routes on Vercel
>>>>>>> e1d13e65624dea6ed8ab69f738a9d619a169671f
})
