import { useLocale } from "next-intl";
import { LOCALE_NAMES, routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { SelectItem } from "@/components/ui/select";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label="Language">
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {LOCALE_NAMES[cur]}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
