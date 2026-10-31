import { Helmet } from 'react-helmet-async';
import { SITE, BRAND, PHONE, HOURS } from '../config';

export default function Seo({
  title,
  description,
  path = '',
  includeSchema = true,
}) {
  const canonicalUrl = `${SITE}${path ? (path.startsWith('/') ? path : `/${path}`) : ''}`.replace(/\/$/, '');
  const ogImageUrl = `${SITE}/og-image.jpg`;

  const locksmithSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: BRAND,
    url: SITE,
    logo: `${SITE}/favicon.svg`,
    image: ogImageUrl,
    telephone: PHONE.display,
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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data */}
      {includeSchema && (
        <script type="application/ld+json">
          {JSON.stringify(locksmithSchema)}
        </script>
      )}
    </Helmet>
  );
}
