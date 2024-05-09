import NavBarWrapper from "../../../components/nav/NavBarWrapper";
import { ReactNode } from "react";
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
