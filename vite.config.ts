import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {}
    : {
        rolldownOptions: {
          output: {
            // Long-lived vendor chunks: app content changes often, React and
            // framer-motion rarely, so returning visitors re-download less.
            codeSplitting: {
              groups: [
                { name: 'react-vendor', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
                { name: 'motion', test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/ }
              ]
            }
          }
        }
      }
}))
