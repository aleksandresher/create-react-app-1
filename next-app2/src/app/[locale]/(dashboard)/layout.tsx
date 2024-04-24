import NavBarWrapper from "../../../components/nav/NavBarWrapper";
import Footer from "../../../components/footer/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode,
  params: {
    locale:string
  }
}
export default function DashboardLayout({ children, params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarWrapper />
      <main className="flex-grow"> {children}</main>

      <Footer />
    </div>
  );
}
