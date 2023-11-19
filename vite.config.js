import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons'],
      plugins: [
        {
          name: 'replace-axios',
          load(id) {
            if (id === 'axios') {
              return 'export default {}'; // replace 'axios' with an empty module
            }
            return null; // let other imports pass through
          },
        },
      ],
    },
  },
};
