import index from './index.html';

// Get development mode from command line argument or default to false
const development = process.argv.includes('--dev') ? true : false;

Bun.serve({
  development: development,
  port: development ? 3000 : 3001,
  routes: {
    '/': index,
  },
});
