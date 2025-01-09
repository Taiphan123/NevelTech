import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/NevelTech/', // Ensure this is correct
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // eslint-disable-next-line no-undef
      '@images': path.resolve(__dirname, 'public/images'),
    },
  },
});