import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3001, // Set your desired port here
//     proxy: {
//       '/api': 'http://localhost:8080', // Example proxy configuration
//     },
//   },
// });

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],

    server: {
      port: parseInt(process.env.VITE_APP_SERVE_PORT),
      proxy: {
        '/api': process.env.VITE_APP_API_URL, // Example proxy configuration
      },
    },
  });
};
