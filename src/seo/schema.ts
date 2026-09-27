import { business } from '../config/business';
import { heroImage, ogImage } from '../config/images';
import { absoluteUrl } from './head';

/**
 * JSON-LD builders. Entities reference each other by stable @id so Google can
 * stitch the graph together across pages.
 */

const ORG_ID = `${business.siteUrl}/#organization`;
const BUSINESS_ID = `${business.siteUrl}/#localbusiness`;
const WEBSITE_ID = `${business.siteUrl}/#website`;

const sameAs = Object.values(business.social).filter(Boolean);

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.line1,
  addressLocality: business.address.city,
  addressRegion: business.address.state,
  postalCode: business.address.pinCode,
  addressCountry: 'IN'
};

export const areaServed = [
  { '@type': 'State', name: 'Punjab' },
  { '@type': 'AdministrativeArea', name: 'National Capital Region (NCR)' },
  { '@type': 'State', name: 'Uttarakhand' },
  { '@type': 'City', name: 'Saharanpur' }
];

export const contactPoint = {
  '@type': 'ContactPoint',
  telephone: business.phoneTel,
  contactType: 'customer service',
  areaServed: 'IN',
  availableLanguage: ['English', 'Hindi']
};

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: business.name,
    url: `${business.siteUrl}/`,
    logo: { '@type': 'ImageObject', url: absoluteUrl('/favicon.svg') },
    image: absoluteUrl(ogImage.src),
    description:
      'Scrap car buyer and vehicle scrapping service offering free scrap car pickup, ELV scrapping, RC cancellation support and transparent valuation.',
    telephone: business.phoneTel,
    address: postalAddress,
    contactPoint: [contactPoint],
    ...(sameAs.length ? { sameAs } : {})
  };
}

export function localBusinessSchema() {
  return {
    '@type': ['AutomotiveBusiness', 'RecyclingCenter'],
    '@id': BUSINESS_ID,
    name: business.name,
    url: `${business.siteUrl}/`,
    image: [absoluteUrl(ogImage.src), absoluteUrl(heroImage.jpg)],
    description:
      'AutoScrape Pro buys scrap, old, damaged and end-of-life vehicles across Punjab, NCR, Uttarakhand and Saharanpur with free pickup, transparent valuation and RTO paperwork support.',
    telephone: business.phoneTel,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: Number(business.location.latitude),
      longitude: Number(business.location.longitude)
    },
    hasMap: business.location.directionsUrl,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingHours.days,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes
    },
    areaServed,
    contactPoint,
    parentOrganization: { '@id': ORG_ID },
    knowsAbout: [
      'Scrap car buying',
      'End-of-life vehicle (ELV) scrapping',
      'Vehicle dismantling',
      'Car recycling',
      'RC cancellation',
      'Vehicle deregistration',
      'Vehicle Scrapping Policy of India'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vehicle scrapping services',
      itemListElement: [
        'Scrap Car Pickup',
        'Vehicle Disposal',
        'ELV Vehicle Scrapping',
        'Scrap Car Valuation',
        'RC Cancellation & RTO Documentation',
        'Free Vehicle Collection'
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
    ...(sameAs.length ? { sameAs } : {})
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${business.siteUrl}/`,
    name: business.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID }
  };
}

export function webPageSchema(path: string, name: string, description: string) {
  const url = absoluteUrl(path);
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    ...(path === '/' ? {} : { breadcrumb: { '@id': `${url}#breadcrumb` } })
  };
}

export function serviceSchema(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  area?: { '@type': string; name: string }[];
}) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { '@id': BUSINESS_ID },
    areaServed: opts.area ?? areaServed,
    offers: {
      '@type': 'Offer',
      description: 'Free doorstep pickup within the service area',
      price: '0',
      priceCurrency: 'INR'
    }
  };
}

export function faqSchema(path: string, faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
}

export function breadcrumbSchema(path: string, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path)
    }))
  };
}
