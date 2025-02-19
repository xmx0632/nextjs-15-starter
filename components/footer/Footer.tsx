import { TwitterX } from "@/components/social-icons/icons";
import { siteConfig, SOURCE_CODE_URL } from "@/config/site";
import { Link as I18nLink } from "@/i18n/routing";
import { GithubIcon, MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { SiBluesky } from "react-icons/si";

export default function Footer() {
  const t = useTranslations("Home");
  return (
    <div className="bg-gray-800 dark:bg-primary-foreground text-gray-300">
      <footer className="py-2 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-6">
            <div className="flex flex-col items-start col-span-full md:col-span-2">
              <div className="space-y-4">
                <div className="items-center space-x-2 flex">
                  <img src="/logo.svg" alt="Next Forge" className="w-8 h-8" />

                  <span className="text-white text-2xl font-bold">
                    {t("title")}
                  </span>
                </div>

                <p className="text-sm p4-4 md:pr-12">{t("tagLine")}</p>

                <div className="flex items-center gap-2">
                  {siteConfig.socialLinks.github && (
                    <a
                      href={siteConfig.socialLinks.github}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="GitHub"
                      title="View on GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      <GithubIcon className="size-4" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.socialLinks.bluesky && (
                    <a
                      href={siteConfig.socialLinks.bluesky}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Blue Sky"
                      title="View on Bluesky"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      <SiBluesky className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.socialLinks.twitter && (
                    <a
                      href={siteConfig.socialLinks.twitter}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Twitter"
                      title="View on Twitter"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      <TwitterX className="w-4 h-4" aria-hidden="true" />
                    </a>
                  )}
                  {siteConfig.socialLinks.email && (
                    <a
                      href={`mailto:${siteConfig.socialLinks.email}`}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Email"
                      title="Email"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                    >
                      <MailIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <I18nLink
                      href={link.href}
                      title={link.label}
                      className=" hover:text-white transition-colors"
                      target={link.target || ""}
                      rel={link.rel || ""}
                    >
                      {link.label}
                    </I18nLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Open Source
              </h3>
              <ul className="space-y-2 text-sm">
                {openSourceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      title={link.label}
                      className=" hover:text-white transition-colors"
                      target={link.target || ""}
                      rel={link.rel || ""}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Other Products
              </h3>
              <ul className="space-y-2 text-sm">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      title={link.label}
                      className=" hover:text-white transition-colors"
                      target={link.target || ""}
                      rel={link.rel || ""}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                {legal.map((link) => (
                  <li key={link.href}>
                    <I18nLink
                      href={link.href}
                      title={link.label}
                      className=" hover:text-white transition-colors"
                      target={link.target || ""}
                      rel={link.rel || ""}
                    >
                      {link.label}
                    </I18nLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="mt-2 p-4 flex justify-center items-center border-t border-gray-700 text-center text-sm text-gray-400">
        <a
          href={SOURCE_CODE_URL}
          title="View on GitHub"
          target="_blank"
          rel="noreferrer nofollow noopener"
        >
          <p>
            &copy; {new Date().getFullYear()} Next Forge. All rights reserved.
          </p>
        </a>
      </div>
    </div>
  );
}

type Link = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
};

const quickLinks: Link[] = [
  { href: "/", label: "English" },
  { href: "/zh-CN", label: "中文" },
  { href: "/ja-JP", label: "日本語" },
];

const openSourceLinks: Link[] = [
  {
    href: "https://github.com/weijunext/nextjs-15-starter",
    label: "Next Forge",
    rel: "noopener noreferrer nofollow",
    target: "_blank",
  },
  {
    href: "https://github.com/weijunext/landing-page-boilerplate",
    label: "Landing Page Boilerplate",
    rel: "noopener noreferrer nofollow",
    target: "_blank",
  },
  {
    href: "https://github.com/weijunext/smart-excel-ai",
    label: "SaaS Template",
    rel: "noopener noreferrer nofollow",
    target: "_blank",
  },
  {
    href: "https://github.com/weijunext/weekly-boilerplate",
    label: "Blog Boilerplate",
    rel: "noopener noreferrer nofollow",
    target: "_blank",
  },
];

const productLinks: Link[] = [
  {
    href: "https://nextidea.dev/",
    label: "Next Idea",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  {
    href: "https://newtab.nextidea.dev/",
    label: "Next Idea NewTab",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  {
    href: "https://ogimage.click/",
    label: "OG Image Generator",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  {
    href: "https://nextjscn.org/",
    label: "Next.js 中文文档",
    rel: "noopener noreferrer",
    target: "_blank",
  },
  {
    href: "https://weijunext.com/",
    label: "J实验室",
    rel: "noopener noreferrer",
    target: "_blank",
  },
];

const legal: Link[] = [
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];
