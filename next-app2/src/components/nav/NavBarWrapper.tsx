import NavBar from "./Navbar";
import { cookies } from "next/headers";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
// import LanguageToggle from "../language/LanguageToggle";

export default function NavBarWrapper() {
  const t = useTranslations("Nav");
  const userCookie = cookies().get("auth");

  return (
    <>
      {" "}
      <NavBar
        userCookie={userCookie}
        home={t("home")}
        about={t("about")}
        products={t("products")}
        contact={t("contact")}
        blog={t("blog")}
        profile={t("profile")}
      />
      <ThemeSwitcher />
      {/* <LanguageToggle /> */}
    </>
  );
}
