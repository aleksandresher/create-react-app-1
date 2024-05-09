import NavBarWrapper from "../../../components/nav/NavBarWrapper";
// import Footer from "../../../components/footer/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
// import { Locale } from "../../../../messages/i18n.config";
import FooterWrapper from "../../../components/footer/FooterWrapper";

interface PageProps {
  children: ReactNode;
  params: {
    locale: "ka" | "en";
  };
}
export default function DashboardLayout({ children, params }: PageProps) {
  const { locale } = params;
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarWrapper locale={locale} />
      <main className="flex-grow"> {children}</main>

      <FooterWrapper />
    </div>
  );
}
