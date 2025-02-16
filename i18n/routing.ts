import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const LOCALES = ['en-US', 'zh-CN', 'ja-JP']
export const DEFAULT_LOCALE = 'en-US'
export const LOCALE_NAMES: Record<string, string> = {
  'en-US': "English",
  'zh-CN': "中文",
  'ja-JP': "日本語",
};

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // auto detect locale
  localeDetection: false,

  // pathnames: {
  // '/': '/',
  //   '/about': {
  //     'en-US': '/about',
  //     'zh-CN': '/zh-CN/about',
  //     'ja-JP': '/ja-JP/about'
  //   },
  //   '/blogs/[slug]': {
  //     'en-US': '/blogs/[slug]',
  //     'zh-CN': '/zh-CN/blogs/[slug]',
  //     'ja-JP': '/ja-JP/blogs/[slug]'
  //   },
  // }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);


export type Locale = (typeof routing.locales)[number];
