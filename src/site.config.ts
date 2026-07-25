// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Eric P',
  role: 'ServiceNow Developer | IT Asset Management Product Builder',
  email: 'eric@example.com',
  tagline: 'I design and build ServiceNow solutions that turn operational problems into practical, maintainable products.',
  description:
    'Portfolio of Eric P — product design and ServiceNow development, with an emphasis on speed, clarity, and the details most people skip.',
  status: 'Currently building at Ryder · open to new work, Q4 2026',
  social: [
    { label: 'GitHub', href: 'https://github.com/ericccp' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eric-a-perez' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;