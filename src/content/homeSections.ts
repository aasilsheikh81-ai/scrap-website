/** Legacy section URLs that render the homepage, scroll to a section and canonicalise to "/". */
export const pathSectionMap: Record<string, string> = {
  '/about': 'about',
  '/services': 'services',
  '/process': 'process',
  '/gallery': 'gallery',
  '/faq': 'faq',
  '/location': 'location',
  '/contact': 'contact'
};

export const sectionAliases = Object.keys(pathSectionMap);
