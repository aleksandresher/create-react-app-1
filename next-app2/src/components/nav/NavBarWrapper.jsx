import NavBar from "./Navbar";
import { cookies } from "next/headers";
import LocaleSwitcher from "../language/LocaleSwitcher";

export default function NavBarWrapper() {
  const userCookie = cookies().get("auth");
  return (
    <section className="w-full flex items-center   bg-[#f48c06] h-[60px] justify-end">
      <NavBar userCookie={userCookie} />
      <LocaleSwitcher />
    </section>
  );
}
