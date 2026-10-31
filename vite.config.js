import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://uklocksmithltd.site';
const BRAND = 'UK Locksmith LTD';
const PHONE_DISPLAY = '07782 358 889';

const META_MAP = {
  '/': {
    title: 'UK Locksmith LTD | 24/7 Emergency London Locksmith',
    description:
      'Locked out in London? UK Locksmith LTD offers 24/7 non-destructive emergency entry, BS3621 lock changes, and upfront fixed pricing. Call 07782 358 889.',
    canonical: 'https://uklocksmithltd.site',
    includeSchema: true,
  },
  '/about': {
    title: 'About Us | UK Locksmith LTD London',
    description:
      'Meet UK Locksmith LTD. Honest London tradespeople answering directly, quoting fixed prices upfront, and focusing on non-destructive entry across London.',
    canonical: 'https://uklocksmithltd.site/about',
    includeSchema: true,
  },
  '/services': {
    title: 'Locksmith Services London | UK Locksmith LTD',
    description:
      'Emergency lockouts, lock changes, UPVC repairs, snapped key extraction, and commercial locks across all London boroughs. Call 07782 358 889 for fixed quotes.',
    canonical: 'https://uklocksmithltd.site/services',
    includeSchema: true,
  },
  '/areas': {
    title: 'London Service Areas | UK Locksmith LTD',
    description:
      '24/7 mobile locksmith coverage across Central, North, East, South, and West London. Fast dispatch to your door with upfront fixed quotes. Call 07782 358 889.',
    canonical: 'https://uklocksmithltd.site/areas',
    includeSchema: true,
  },
  '/contact': {
    title: 'Contact Us | UK Locksmith LTD London',
    description:
      'Get in touch with UK Locksmith LTD. 24/7 emergency dispatch across London. Call 07782 358 889 directly for immediate help and honest upfront pricing.',
    canonical: 'https://uklocksmithltd.site/contact',
    includeSchema: true,
  },
  '/404': {
    title: 'Page Not Found | UK Locksmith LTD',
    description:
      'The page you requested could not be found. UK Locksmith LTD provides 24/7 emergency locksmith services across London. Call 07782 358 889.',
    canonical: 'https://uklocksmithltd.site/404',
    includeSchema: false,
  },
};

const LOCKSMITH_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Locksmith',
  name: BRAND,
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  image: `${SITE}/og-image.jpg`,
  telephone: PHONE_DISPLAY,
  priceRange: '££',
  description:
    '24-hour emergency locksmith service across London. Fast response, non-destructive entry, and upfront fixed pricing.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5074,
    longitude: -0.1278,
  },
  areaServed: {
    '@type': 'City',
    name: 'London',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    onPageRendered(url, renderedHTML) {
      const cleanUrl = url.startsWith('/') ? url : `/${url}`;
      const normalizedPath = cleanUrl === '/' || cleanUrl === '/index.html' ? '/' : cleanUrl.replace(/\/$/, '');
      const meta = META_MAP[normalizedPath] || META_MAP['/'];

      const schemaHtml = meta.includeSchema
        ? `<script type="application/ld+json">${JSON.stringify(LOCKSMITH_SCHEMA)}</script>`
        : '';

      const tags = `
    <title>${meta.title}</title>
    <meta name="title" content="${meta.title}">
    <meta name="description" content="${meta.description}">
    <link rel="canonical" href="${meta.canonical}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${meta.canonical}">
    <meta property="og:title" content="${meta.title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:image" content="${SITE}/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="${BRAND}">
    <meta property="og:locale" content="en_GB">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${meta.canonical}">
    <meta name="twitter:title" content="${meta.title}">
    <meta name="twitter:description" content="${meta.description}">
    <meta name="twitter:image" content="${SITE}/og-image.jpg">
    ${schemaHtml}`;

      return renderedHTML.replace('<head>', `<head>${tags}`);
    },
  },
});
