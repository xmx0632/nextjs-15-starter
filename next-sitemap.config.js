/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.dev";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    "*/404",
    "*/500",
    "*/_*",
    "*/api/*",
    "**/*.webp",
    "/assets/*",
    "/en-US/*", // 排除 /en-US 路径，因为默认语言内容直接在根路径显示
  ],
  alternateRefs: [
    {
      href: `${siteUrl}`, // 默认语言(en-US)直接使用根路径
      hreflang: "en-US",
    },
    {
      href: `${siteUrl}/zh-CN`,
      hreflang: "zh-CN",
    },
    {
      href: `${siteUrl}/ja-JP`,
      hreflang: "ja-JP",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/*",
          "/assets/",
          "*/404",
          "*/500",
          "/en-US/*", // 同样在 robots.txt 中排除 /en-US 路径
        ],
      },
    ],
  },
  transform: async (config, path) => {
    // 如果路径以 /en-US 开头，返回 null 以排除该 URL
    if (path.startsWith("/en-US/")) {
      return null;
    }

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
