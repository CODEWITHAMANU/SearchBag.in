/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.searchbag.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/seller', '/seller/(.*)', '/api/(.*)'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/seller', '/api'],
      },
    ],
  },
};
