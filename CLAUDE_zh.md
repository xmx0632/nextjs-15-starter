# CLAUDE.md (中文版)

此文件为 Claude Code (claude.ai/code) 提供在代码库中工作的指导。

## 快速命令

- **开发模式**: `pnpm dev` - 启动 Next.js 开发服务器
- **构建**: `pnpm build` - 构建生产版本
- **启动**: `pnpm start` - 启动生产服务器
- **代码检查**: `pnpm lint` - 运行 ESLint
- **类型检查**: `pnpm type-check` - 检查 TypeScript 类型

## 项目概览

**Next Forge** - 多语言 Next.js 15 启动模板，内置国际化支持（英文、中文、日文）。包含 MDX 博客系统、SEO 优化、深色/浅色主题切换，以及全面的分析工具集成。

## 架构详情

### 核心技术栈
- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript (严格模式)
- **样式**: Tailwind CSS + Shadcn/ui 组件库
- **状态管理**: Zustand 客户端状态管理
- **包管理器**: pnpm (已配置 packageManager 字段)

### 国际化 (i18n)
- **库**: next-intl 处理国际化路由和翻译
- **语言**: 英文 (en)、中文 (zh)、日文 (ja)
- **路由**: 基于语言的路由，使用中间件处理
- **翻译文件**: 位于 `i18n/messages/[locale].json`

### 内容管理系统
- **博客系统**: `blogs/[locale]/` 中的 MDX 文件，支持前置元数据
- **静态页面**: `content/[page]/[locale].mdx` 中的 MDX 文件
- **SEO**: 自动生成站点地图、Open Graph、多语言元标签
- **分析工具**: Google Analytics、百度统计、Google Adsense、Vercel Analytics

### 关键目录结构
- `app/[locale]/` - 国际化路由（页面）
- `components/` - 可复用的 React 组件
- `lib/` - 工具函数和帮助方法
- `config/` - 站点配置
- `types/` - TypeScript 类型定义

### 重要文件
- `config/site.ts` - 站点配置和元数据
- `i18n/routing.ts` - 语言配置和导航工具
- `middleware.ts` - Next-intl 中间件处理语言路由
- `lib/getBlogs.ts` - 博客文章获取和处理
- `components/mdx/MDXComponents.tsx` - MDX 组件注册表

### 环境变量
分析工具所需（添加到 `.env`）：
- `NEXT_PUBLIC_GOOGLE_ANALYTICS`
- `NEXT_PUBLIC_BAIDU_TONGJI`
- `NEXT_PUBLIC_GOOGLE_ADSENSE`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_LOCALE_DETECTION`

### 开发注意事项
- 使用 `i18n/routing.ts` 中的 `Link` 组件，而非 Next.js 默认组件
- MDX 博客文章需要特定前置元数据格式（参见 README.md）
- 所有组件使用 `@/` 导入别名指向根目录
- 主题提供者和分析工具在 layout.tsx 中包装整个应用