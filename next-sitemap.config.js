/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["**/*.webp"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/assets/"],
      },
    ],
  },
};
