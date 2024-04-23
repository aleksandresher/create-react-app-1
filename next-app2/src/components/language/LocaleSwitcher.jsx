import { NextIntlClientProvider, useMessages } from "next-intl";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitchSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("Index");
  const locale = useLocale();
  const locales = ["ka", "en"];

  return (
    <NextIntlClientProvider>
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </NextIntlClientProvider>
  );
}
