import { DEFAULT_LOCALE } from "@/i18n/routing";
import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nextforge.dev";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-15-starter";

const TWITTER_URL = 'https://x.com/weijunext'
const BSKY_URL = 'https://bsky.app/profile/judewei.bsky.social'
const EMAIL_URL = 'mailto:weijunext@gmail.com'
const GITHUB_URL = 'https://github.com/weijunext'

const baseSiteConfig = {
  name: "Next Forge",
  tagLine: 'Next.js i18n starter',
  description:
    "Next.js 15 Starter is a meticulously designed Next.js starter template aimed at providing developers with a clean, efficient, and scalable foundation for quickly launching.",
  url: BASE_URL,
  metadataBase: new URL(BASE_URL),
  keywords: [],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: '@weijunext',
  socialLinks: {
    bluesky: BSKY_URL,
    twitter: TWITTER_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: DEFAULT_LOCALE,
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
