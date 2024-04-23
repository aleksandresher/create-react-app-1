"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogOut from "../logout/LogOut";

// import { useTranslations } from "next-intl";

const NavBar = ({
  userCookie,
  home,
  about,
  products,
  contact,
  blog,
  profile,
}) => {
  const pathname = usePathname();

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
    <header className="flex justify-end  items-center  bg-[#f48c06] h-[50px]">
      <nav className=" pr-[100px] p-2">
        <ul className="flex justify-between gap-5 items-center ">
          <li>
            <Link
              href="/"
              className={
                defineActive("/")
                  ? " line-clamp-1 underline underline-offset-4"
                  : "line-clamp-1"
              }
            >
              {home}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                defineActive("/about") ? "underline underline-offset-4" : ""
              }
            >
              {about}
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                defineActive("/products") ? "underline underline-offset-4" : ""
              }
            >
              {products}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                defineActive("/contact") ? "underline underline-offset-4" : ""
              }
            >
              {contact}
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={
                defineActive("/blog") ? "underline underline-offset-4" : ""
              }
            >
              {blog}
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
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
          <li></li>
          <li>{userCookie ? <LogOut /> : null}</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
