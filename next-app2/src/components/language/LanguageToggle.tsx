"use client";

import { ChangeEvent } from "react";
// import { Locale } from "../../../messages/i18n.config";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";

    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggle = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    router.push(redirectedPathname(locale));
  };

  return (
    <section>
      <select id="lang" onChange={toggle} className="p-2 rounded-md">
        {pathname.includes("ka") && (
          <option value="ka" className="p-1">
            Georgian
          </option>
        )}
        <option value="en" className="p-2">
          English
        </option>
        {pathname.includes("en") && (
          <option value="ka" className="p-2">
            Georgian
          </option>
        )}
      </select>
    </section>
  );
}
