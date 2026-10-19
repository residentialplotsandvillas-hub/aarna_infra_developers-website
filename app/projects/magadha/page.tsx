import type { Metadata } from 'next';
import Script from 'next/script';
import MagadhaClient from './MagadhaClient';

const SITE = 'https://aarnainfradevelopers.com';
const PAGE = `${SITE}/projects/Magadha`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: 'Residential Plots in Kadthal | Magadha – Aarna Infra Developers',
  description:
    'Buy premium DTCP & RERA approved residential open plots in Kadthal near Future City, Srisailam Highway. 165–500 sq.yds plots near Pharma City, RGIA, ORR & Amazon Data Center. Book a site visit today.',
  keywords: [
    'residential plots in Kadthal',
    'Kadthal plots for sale',
    'plots near Hyderabad',
    'open plots Kadthal',
    'DTCP approved plots Kadthal',
    'RERA approved plots Hyderabad',
    'Aarna Infra Developers',
    'Magadha plots',
    'IndoQatar Magadha',
    'investment plots in Kadthal',
    'gated community plots Kadthal',
    'plots near Future City',
    'plots near Srisailam Highway',
    'plots near Pharma City',
    'plots near RGIA airport',
    'plots near Amazon Data Center Hyderabad',
    'plots near Maisigandi Temple',
    'real estate Hyderabad',
    'buy plots near ORR Exit 14',
    'villa plots Kadthal',
  ],
  authors: [{ name: 'Aarna Infra Developers', url: SITE }],
  creator: 'Aarna Infra Developers',
  publisher: 'Aarna Infra Developers',
  alternates: { canonical: '/projects/Magadha' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: PAGE,
    title: 'Magadha – Premium Residential Plots in Kadthal | Aarna Infra Developers',
    description:
      '32-acre DTCP & RERA approved open plots community in Kadthal near Future City. 435 premium plots, clubhouse, Shivoham theme park, 24/7 security. From Aarna Infra Developers.',
    siteName: 'Aarna Infra Developers',
    locale: 'en_IN',
    images: [
      {
        url: '/assets/img/projects/openplots/Magadha-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Magadha Residential Plots Kadthal – Aarna Infra Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Aarnainfradev',
    creator: '@Aarnainfradev',
    title: 'Magadha – Residential Plots in Kadthal | Aarna Infra Developers',
    description: 'DTCP & RERA approved 32-acre open plots community near Future City, Kadthal.',
    images: ['/assets/img/projects/openplots/Magadha-1.jpg'],
  },
  category: 'real estate',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#organization`,
      name: 'Aarna Infra Developers',
      url: SITE,
      logo: `${SITE}/assets/img/logo/aarna.jpg`,
      sameAs: [
        'https://www.facebook.com/aarnainfradevelopers',
        'https://www.instagram.com/aarnainfradevelopers/',
        'https://www.youtube.com/@aarnainfradevelopers',
        'https://twitter.com/Aarnainfradev',
        'https://www.linkedin.com/in/aarna-infra-developers-29ab30200/',
        'https://telegram.me/aarnainfradevelopers',
      ],
    },
    {
      '@type': 'RealEstateListing',
      '@id': `${PAGE}#listing`,
      name: 'Magadha – Residential Open Plots in Kadthal',
      description:
        '32-acre DTCP & RERA approved open plots community near Future City, Maisigandi, Kadthal with 435 plots (165–500 sq.yds), clubhouse, Shivoham theme park, BT roads, 24/7 security.',
      url: PAGE,
      image: [
        `${SITE}/assets/img/projects/openplots/Magadha-1.jpg`,
        `${SITE}/assets/img/projects/openplots/Magadha-2.jpg`,
        `${SITE}/assets/img/projects/openplots/Magadha-3.jpg`,
      ],
      datePosted: '2024-01-15',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        price: 'Call for price',
        url: PAGE,
        seller: { '@id': `${SITE}/#organization` },
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Future City, Maisigandi',
        addressLocality: 'Kadthal',
        addressRegion: 'Telangana',
        postalCode: '509358',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 16.9533998, longitude: 78.506271 },
      amenityFeature: [
        'Shivoham Theme Park',
        'Clubhouse',
        'All BT Roads',
        'Overhead Water Tank',
        '24/7 Security',
        'Avenue Plantation',
        'Children Play Area',
        'Street Lights',
        'Underground Drainage',
      ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
        { '@type': 'ListItem', position: 3, name: 'Open Plots', item: `${SITE}/openplots` },
        { '@type': 'ListItem', position: 4, name: 'Magadha', item: PAGE },
      ],
    },
  ],
};

export default function MagadhaPage() {
  return (
    <>
      <Script
        id="magadha-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MagadhaClient />
    </>
  );
}