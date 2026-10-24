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
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        catCollegePredictor: resolve(__dirname, 'tools/cat-college-predictor/index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/canvas-confetti')) {
            return 'vendor-confetti';
          }
          if (id.includes('src/data/collegesData.js')) {
            return 'data-colleges';
          }
          if (id.includes('src/data/blogs') || id.includes('src/data/blogsData.js')) {
            return 'data-blogs';
          }
          if (
            id.includes('src/data/catMock') ||
            id.includes('src/data/xatMock') ||
            id.includes('src/data/cmatMock') ||
            id.includes('src/data/snapMock') ||
            id.includes('src/data/nmatMock') ||
            id.includes('src/data/mockTestsData.js')
          ) {
            return 'data-mocktests';
          }
          if (id.includes('src/data/aiuOfficialData.js')) {
            return 'data-aiu';
          }
        }
      }
    }
  }
});
