import NavBar from "./Navbar";
import { cookies } from "next/headers";
//import { useTranslations } from "next-intl";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { Locale } from "../../../messages/i18n.config";
import { getDictionary } from "../../../messages/dictionaries";
import LanguageToggle from "../language/LanguageToggle";

interface Props {
  locale: Locale
}

export default async function NavBarWrapper({ locale }: Props) {

  console.log("navbarwrapper " + locale)
  const {navigation: dict} = await getDictionary(locale);
  //const t = useTranslations("Nav");
  const userCookie = cookies().get("auth");

  return (
    <>
      {" "}
      <NavBar
        userCookie={userCookie}
        home={dict.home}
        about={dict.about}
        products={dict.products}
        contact={dict.contact}
        blog={dict.blogs}
        profile={dict.profile}
        logoutText={dict.logout}
      />
      <ThemeSwitcher />
      <LanguageToggle locale={locale}/>
    </>
  );
}
