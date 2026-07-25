// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Eric P',
  role: 'ServiceNow Developer & Product Builder',
  email: 'eric@example.com',
  tagline: 'I build ServiceNow solutions that turn operational problems into practical products people can actually use and maintain.',
  description:
    'The portfolio of Eric, a ServiceNow developer and product builder focused on IT asset management, workflow automation, integrations, and practical enterprise solutions.',
  status: 'Currently building in Miami, FL · Open to new work, Q4 2026',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eric-a-perez' },
    { label: 'GitHub', href: 'https://github.com/ericccp' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;