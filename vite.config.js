import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: 'http://mongo-backend-service.backend.svc.cluster.local',
        changeOrigin: true,
      },
    },
  },
})