export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons'],
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
