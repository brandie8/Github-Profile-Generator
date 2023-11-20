import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
     
      plugins: [
        { 
          name: 'replace-axios',
          resolveId(source) {
            if (source === 'axios') {
              return source; // resolve 'axios' to itself
            }
            return null;
          },
        },
      ],
    },
  },
};
