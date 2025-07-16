# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

- **Development**: `pnpm dev` - Start Next.js dev server
- **Build**: `pnpm build` - Build for production
- **Start**: `pnpm start` - Start production server
- **Lint**: `pnpm lint` - Run ESLint
- **Type check**: `pnpm type-check` - Check TypeScript types

## Project Overview

**Next Forge** - Multilingual Next.js 15 starter with built-in i18n support (English, Chinese, Japanese). Features MDX blog system, SEO optimization, dark/light themes, and comprehensive analytics integration.

## Architecture

### Core Structure
- **Framework**: Next.js 15 with App Router
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS + Shadcn/ui components
- **State**: Zustand for client state management
- **Package Manager**: pnpm (configured with packageManager field)

### Internationalization
- **Library**: next-intl for i18n routing and translations
- **Languages**: English (en), Chinese (zh), Japanese (ja)
- **Routing**: Locale-based routing with middleware
- **Message Files**: Located in `i18n/messages/[locale].json`

### Content Management
- **Blog System**: MDX files in `blogs/[locale]/` with frontmatter support
- **Static Pages**: MDX files in `content/[page]/[locale].mdx`
- **SEO**: Automatic sitemap generation, Open Graph, multilingual meta tags
- **Analytics**: Google Analytics, Baidu Analytics, Google Adsense, Vercel Analytics

### Key Directories
- `app/[locale]/` - Internationalized routes (pages)
- `components/` - Reusable React components
- `lib/` - Utility functions and helpers
- `config/` - Site configuration
- `types/` - TypeScript type definitions

### Important Files
- `config/site.ts` - Site configuration and metadata
- `i18n/routing.ts` - Locale configuration and navigation utilities
- `middleware.ts` - Next-intl middleware for locale routing
- `lib/getBlogs.ts` - Blog post fetching and processing
- `components/mdx/MDXComponents.tsx` - MDX component registry

### Environment Variables
Required for analytics (add to `.env`):
- `NEXT_PUBLIC_GOOGLE_ANALYTICS`
- `NEXT_PUBLIC_BAIDU_TONGJI`
- `NEXT_PUBLIC_GOOGLE_ADSENSE`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_LOCALE_DETECTION`

### Development Notes
- Use `Link` component from `i18n/routing.ts` instead of Next.js default
- MDX blog posts require specific frontmatter format (see README.md)
- All components use `@/` import alias pointing to root directory
- Theme provider and analytics wrap the entire app in layout.tsx