import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: https://<USER>.github.io/<REPO>/
// Keep this in sync with your GitHub repo name (and package.json "homepage").
const GH_PAGES_BASE = '/skill-shaper-app/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? GH_PAGES_BASE : '/',
}))
