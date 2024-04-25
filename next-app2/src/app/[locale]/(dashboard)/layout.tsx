import NavBarWrapper from "../../../components/nav/NavBarWrapper";
import Footer from "../../../components/footer/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Locale } from "../../../../messages/i18n.config";

interface PageProps {
  children: ReactNode,
  params: {
    locale:Locale
  }
}
export default function DashboardLayout({ children, params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarWrapper locale={locale}/>
      <main className="flex-grow"> {children}</main>

      <Footer />
    </div>
  );
}
