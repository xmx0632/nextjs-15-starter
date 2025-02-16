"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { LOCALE_NAMES, routing } from "@/i18n/routing";
import { Globe, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export function LanguageDetectionAlert() {
  const t = useTranslations("LanguageDetection");
  const [browserLang, setBrowserLang] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const currentLocale = useLocale();

  useEffect(() => {
    const detectedLang = navigator.language; // 获取完整语言代码，如 zh_HK
    const storedDismiss = sessionStorage.getItem("langAlertDismissed");

    if (!storedDismiss) {
      // 检查是否支持完整语言代码（如 zh_HK）
      let supportedLang = routing.locales.find((l) => l === detectedLang);

      // 如果不支持完整语言代码，检查主语言（如 zh）
      if (!supportedLang) {
        const mainLang = detectedLang.split("_")[0]; // 获取主语言，如 zh
        supportedLang = routing.locales.find((l) => l.startsWith(mainLang));
      }

      // 如果仍然不支持，则默认切换到英语
      setBrowserLang(supportedLang || "en-US");
      setShowAlert(supportedLang !== currentLocale);
    }
  }, [currentLocale]);

  const handleDismiss = () => {
    sessionStorage.setItem("langAlertDismissed", "true");
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <Alert className="mb-4 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 h-6 w-6"
        onClick={handleDismiss}
      >
        <X className="h-4 w-4" />
      </Button>
      <Globe className="h-4 w-4" />
      <AlertTitle>{t("title")}</AlertTitle>
      <AlertDescription>
        {t("description")}{" "}
        <Link href="/" locale={browserLang} className="text-primary underline">
          {LOCALE_NAMES[browserLang]}
        </Link>
      </AlertDescription>
    </Alert>
  );
}
