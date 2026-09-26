import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // GitHub Pages : /icosium-display/ (défaut). Vercel / Netlify : définir VITE_BASE=/
  base: process.env.VITE_BASE ?? '/icosium-display/',
})