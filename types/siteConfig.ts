
export type AuthorsConfig = {
  name: string
  url: string
}
export type ThemeColor = {
  media: string
  color: string
}
export type SiteConfig = {
  name: string
  tagLine: string
  description: string
  url: string
  keywords: string[]
  authors: AuthorsConfig[]
  socialLinks: {
    github: string
    bluesky: string
    twitter: string
    email: string
  }
  creator: string
  metadataBase: URL | string
  themeColors?: string | ThemeColor[]
  defaultNextTheme?: string
  icons: {
    icon: string
    shortcut?: string
    apple?: string
  }
  openGraph: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    siteName: string
    images?: string[]
  },
  twitter: {
    card: string
    title: string
    site: string
    description: string
    images?: string[]
    creator: string
  },
}
