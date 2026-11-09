import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

// Simulate Vercel cleanUrls: true
function createCleanUrlsServer() {
  return http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';

    // 1. Try direct file
    let filePath = path.join(distDir, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(filePath).pipe(res);
    }

    // 2. cleanUrls: try appending .html
    let htmlPath = path.join(distDir, `${reqPath}.html`);
    if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(htmlPath).pipe(res);
    }

    // 3. Fallback to 404.html
    const notFoundPath = path.join(distDir, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(notFoundPath).pipe(res);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  });
}

const server = createCleanUrlsServer();
const PORT = 4299;

server.listen(PORT, async () => {
  console.log(`Test cleanUrls server listening on port ${PORT}`);

  const testUrls = [
    { url: '/locksmith/barnet', expectedStatus: 200, expectedText: 'Locksmith Barnet | We Fix Locks, Doors & Keys' },
    { url: '/locksmith/ilford', expectedStatus: 200, expectedText: 'Local Locksmith in Ilford | Call Us Any Hour' },
    { url: '/locksmith/fulham', expectedStatus: 200, expectedText: 'Local Locksmith in Fulham | Call Us Any Hour' },
    { url: '/locksmith/islington', expectedStatus: 200, expectedText: 'Lock Problem in Islington? Call a Local Locksmith' },
    { url: '/locksmith/wembley', expectedStatus: 200, expectedText: 'Wembley Locksmith on Call | Open Round the Clock' },
    { url: '/locksmith/clapham', expectedStatus: 200, expectedText: 'Lost or Snapped Key in Clapham? Call a Locksmith' },
    { url: '/areas', expectedStatus: 200, expectedText: 'Areas We Cover | UK Locksmith LTD' },
    { url: '/locksmith/non-existent-area', expectedStatus: 404, expectedText: '404' },
  ];

  let passed = 0;
  for (const t of testUrls) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}${t.url}`);
      const text = await res.text();
      const statusOk = res.status === t.expectedStatus;
      const textOk = text.includes(t.expectedText);

      if (statusOk && textOk) {
        console.log(`✅ [${res.status}] ${t.url} - OK`);
        passed++;
      } else {
        console.error(`❌ [${res.status}] ${t.url} - Failed (expected ${t.expectedStatus}, textMatch=${textOk})`);
      }
    } catch (err) {
      console.error(`Error requesting ${t.url}:`, err.message);
    }
  }

  console.log(`\nTest result: ${passed}/${testUrls.length} tests passed.`);
  server.close(() => process.exit(passed === testUrls.length ? 0 : 1));
});

