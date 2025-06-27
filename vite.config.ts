import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Use relative paths for custom domain root
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
