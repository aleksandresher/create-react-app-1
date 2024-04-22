import NavBarWrapper from "../../../components/nav/NavBarWrapper";
import Footer from "../../../components/footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarWrapper />
      <main className="flex-grow"> {children}</main>

      <Footer />
    </div>
  );
}
