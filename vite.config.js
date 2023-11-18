
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons', 'axios'],
    },
  },
};
