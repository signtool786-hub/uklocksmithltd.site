import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AREAS } from '../src/data/areas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Hardcoded site domain - using ONLY this site's domain
const SITE = 'https://uklocksmithltd.site';

// Public crawlable routes
const baseRoutes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: '/about', changefreq: 'weekly', priority: '0.8' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/areas', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'weekly', priority: '0.7' },
];

// Area routes for all 60 areas
const areaRoutes = AREAS.map((area) => ({
  path: `/locksmith/${area.slug}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

const allRoutes = [...baseRoutes, ...areaRoutes];
const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

function generateSitemap() {
  const publicPath = path.join(projectRoot, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemapXml, 'utf8');
  console.log(`Generated sitemap with ${allRoutes.length} URLs at ${publicPath}`);

  const distDir = path.join(projectRoot, 'dist');
  if (fs.existsSync(distDir)) {
    const distPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distPath, sitemapXml, 'utf8');
    console.log(`Generated sitemap with ${allRoutes.length} URLs at ${distPath}`);
  }
}

generateSitemap();
