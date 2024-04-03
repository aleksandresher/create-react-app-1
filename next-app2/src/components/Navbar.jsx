"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  function defineActive(path) {
    if (pathname === path) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <header className="flex justify-end items-center  bg-[#f48c06] h-[50px]">
      <nav className="w-1/3 pr-[100px]">
        <ul className="flex justify-between gap-2 ">
          <li>
            <Link
              href="/"
              className={
                defineActive("/") ? "underline underline-offset-4" : ""
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                defineActive("/about") ? "underline underline-offset-4" : ""
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                defineActive("/products") ? "underline underline-offset-4" : ""
              }
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                defineActive("/contact") ? "underline underline-offset-4" : ""
              }
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={
                defineActive("/blog") ? "underline underline-offset-4" : ""
              }
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className={
                defineActive("/profile") ? "underline underline-offset-4" : ""
              }
            >
              Profile
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
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
