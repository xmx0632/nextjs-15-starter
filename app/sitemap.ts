import { siteConfig } from '@/config/site'
import { LOCALES } from '@/i18n/routing'
import { MetadataRoute } from 'next'
const siteUrl = siteConfig.url

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 静态页面
  const staticPages = [
    '',
    // '/about',
    // 添加其他静态页面路径
  ]

  // 生成多语言页面
  const pages = LOCALES.flatMap(locale => {
    return staticPages.map(page => ({
      url: `${siteUrl}${locale === 'en-US' ? '' : `/${locale}`}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'daily' : 'weekly' as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | undefined,
      priority: page === '' ? 1.0 : 0.8,
    }))
  })

  // 如果你有动态页面（如博客），可以在这里添加
  // const blogPosts = await getBlogPosts()
  // const blogPages = blogPosts.map(post => ({
  //   url: `${siteUrl}/blogs/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }))

  return [
    ...pages,
    // ...blogPages, // 如果有动态页面，取消注释
  ]
}