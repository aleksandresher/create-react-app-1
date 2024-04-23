import NavBar from "./Navbar";
import { cookies } from "next/headers";
import LocaleSwitcher from "../language/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function NavBarWrapper() {
  const userCookie = cookies().get("auth");
  const t = useTranslations("Navigation");
  return (
    <section className="w-full flex items-center   bg-[#f48c06] h-[60px] justify-end">
      <NavBar
        userCookie={userCookie}
        home={t("home")}
        about={t("about")}
        contact={t("contact")}
        profile={t("profile")}
        blog={t("blog")}
        products={t("products")}
      />
      <LocaleSwitcher />
    </section>
  );
}
