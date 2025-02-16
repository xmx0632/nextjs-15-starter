import { Locale } from '@/i18n/routing'
import { create } from 'zustand'

interface LocaleState {
  currentLocale: Locale
  showLanguageAlert: boolean
  browserLang: Locale
  setCurrentLocale: (locale: Locale) => void
  setShowLanguageAlert: (show: boolean) => void
  setBrowserLang: (lang: Locale) => void
  dismissLanguageAlert: () => void
  getLangAlertDismissed: () => boolean
}

export const useLocaleStore = create<LocaleState>((set) => ({
  // currentLocale: DEFAULT_LOCALE,
  currentLocale: '', // 勿改，会影响检测语言切换判断 // don't change, it will affect the language detection switch judgment
  showLanguageAlert: false,
  browserLang: '',
  setCurrentLocale: (locale) => set((state) => ({
    currentLocale: locale,
  })),
  setShowLanguageAlert: (show) => set({ showLanguageAlert: show }),
  setBrowserLang: (lang) => set({ browserLang: lang }),
  dismissLanguageAlert: () => {
    localStorage.setItem("langAlertDismissed", "true");
    set({ showLanguageAlert: false });
  },
  getLangAlertDismissed: () => {
    return localStorage.getItem("langAlertDismissed") === "true";
  },
}))