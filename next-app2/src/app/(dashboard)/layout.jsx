import NavBar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow"> {children}</main>

      <Footer />
    </div>
  );
}
