import { defineConfig } from 'vite';
import { resolve } from 'path';

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
        main: resolve(import.meta.dirname, 'index.html'),
        catCollegePredictor: resolve(import.meta.dirname, 'tools/cat-college-predictor/index.html')
      }
    }
  }
});
