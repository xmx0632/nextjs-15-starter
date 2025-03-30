import { Locale } from '@/i18n/routing';
import Cookies from 'js-cookie';
import { create } from 'zustand';

interface LocaleState {
  showLanguageAlert: boolean
  browserLang: Locale
  setShowLanguageAlert: (show: boolean) => void
  setBrowserLang: (lang: Locale) => void
  dismissLanguageAlert: () => void
  getLangAlertDismissed: () => boolean
}

export const useLocaleStore = create<LocaleState>((set) => ({
  showLanguageAlert: false,
  browserLang: '',
  setShowLanguageAlert: (show) => set({ showLanguageAlert: show }),
  setBrowserLang: (lang) => set({ browserLang: lang }),
  dismissLanguageAlert: () => {
    // cookie expires 30 days
    Cookies.set("langAlertDismissed", "true", { expires: 30 });
    set({ showLanguageAlert: false });
  },
  getLangAlertDismissed: () => {
    return Cookies.get("langAlertDismissed") === "true";
  },
}))