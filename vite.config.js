import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: 'http://java-backend-service.default.svc.cluster.local',
        changeOrigin: true,
      },
    },
  },
})