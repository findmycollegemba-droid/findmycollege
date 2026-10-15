import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    {
      name: 'html-clean-urls',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const rawUrl = req.url || '';
          const [pathname, search] = rawUrl.split('?');
          if (pathname === '/tools/cat-college-predictor' || pathname === '/tools/cat-college-predictor/') {
            req.url = '/tools/cat-college-predictor/index.html' + (search ? '?' + search : '');
          }
          next();
        });
      }
    }
  ],
  server: {
    proxy: {
      '/admin': {
        target: 'https://crm-admin.findmycollege-mba.workers.dev',
        changeOrigin: true,
        secure: true,
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catCollegePredictor: resolve(__dirname, 'tools/cat-college-predictor/index.html')
      }
    }
  }
});
