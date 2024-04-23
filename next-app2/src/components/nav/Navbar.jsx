"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import LogOut from "../logout/LogOut";

const NavBar = ({
  userCookie,
  home,
  blog,
  contact,
  profile,
  products,
  about,
}) => {
  const pathname = usePathname();
  const params = useParams();
  const { locale } = params;

  function defineActive(path) {
    if (path === "/" && pathname === path) {
      return true;
    } else if (path !== "/" && pathname.startsWith(path)) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <header>
      <nav className="flex items-center p-2 ">
        <ul className=" px-4 flex justify-between gap-4 items-center ">
          <li>
            <Link
              href={`/${locale}/`}
              className={
                defineActive("/") ? "underline underline-offset-4" : ""
              }
            >
              {home}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/about`}
              className={
                defineActive("/about") ? "underline underline-offset-4" : ""
              }
            >
              {about}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/products`}
              className={
                defineActive("/products") ? "underline underline-offset-4" : ""
              }
            >
              {products}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact`}
              className={
                defineActive("/contact") ? "underline underline-offset-4" : ""
              }
            >
              {contact}
            </Link>
          </li>

          <li>
            <Link
              href={`/${locale}/blog`}
              className={
                defineActive("/blog") ? "underline underline-offset-4" : ""
              }
            >
              {blog}
            </Link>
          </li>

          <li>
            <Link
              href={`/${locale}/profile`}
              className={
                defineActive("/profile") ? "underline underline-offset-4" : ""
              }
            >
              {profile}
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Image
                src="/shopping-cart.png"
                alt="cart"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li className="ml-6">{userCookie ? <LogOut /> : null}</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
