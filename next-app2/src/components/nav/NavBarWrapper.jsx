import NavBar from "./Navbar";
import { cookies } from "next/headers";

export default function NavBarWrapper() {
  const userCookie = cookies().get("auth");
  return <NavBar userCookie={userCookie} />;
}
