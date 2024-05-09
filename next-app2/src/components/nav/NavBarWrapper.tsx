import NavBar from "./Navbar";
import { cookies } from "next/headers";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import LanguageToggle from "../language/LanguageToggle";

interface Props {
  locale: "ka" | "en";
}

export default async function NavBarWrapper({ locale }: Props) {
  const userCookie = cookies().get("auth");

  return (
    <section className="flex justify-end items-center pr-8 gap-4">
      <NavBar userCookie={userCookie} locale={locale} />
      <ThemeSwitcher />
      <LanguageToggle />
    </section>
  );
}
