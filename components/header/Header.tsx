import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("Home");
  return (
    <header className="py-4">
      <div className="mx-auto px-2 sm:px-4 lg:px-12">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" className="flex items-center space-x-1 font-bold">
              <Image
                alt={siteConfig.name}
                src="/logo.svg"
                className="w-6 h-6"
                width={32}
                height={32}
              />
              <span className="text-gray-800 dark:text-gray-200">
                {t("title")}
              </span>
            </Link>
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>

          <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6">
            {/* PC */}
            <div className="hidden md:flex items-center gap-x-4">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2">
                  <Menu className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <Link
                      href="/"
                      className="flex items-center space-x-1 font-bold"
                    >
                      <Image
                        alt={siteConfig.name}
                        src="/logo.svg"
                        className="w-6 h-6"
                        width={32}
                        height={32}
                      />
                      <span className="text-gray-800 dark:text-gray-200">
                        {t("title")}
                      </span>
                    </Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="p-2 focus:bg-transparent justify-end">
                      <div className="flex items-center gap-x-4">
                        <LocaleSwitcher />
                        <ThemeToggle />
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
