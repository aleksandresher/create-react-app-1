"use client";
import { useChangeLocale, useCurrentLocale } from "../../app/locales/client";
import { useI18n } from "../../app/locales/client";

export default function LanguageToggle() {
  const changeLocale = useChangeLocale();

  const t = useI18n();

  return (
    <>
      <button onClick={() => changeLocale("en")}>{t("english")}</button>
      <button onClick={() => changeLocale("ka")}>{t("georgian")}</button>
    </>
  );
}
