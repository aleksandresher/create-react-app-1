"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import LogOut from "../logout/LogOut";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { useI18n } from "../../app/locales/client";
import { getCartItems } from "../../lib/load-cart-items";
import { useQuery } from "@tanstack/react-query";
import CartIcon from "../svg/CartIcon";

interface props {
  userCookie: RequestCookie | undefined;
  locale: "en" | "ka";
}

const NavBar = ({ userCookie, locale }: props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartItems(),
  });

  const pathname = usePathname();
  const t = useI18n();

  const params = useParams();
  // const { locale } = params;

  function defineActive(path: string) {
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
                defineActive("/")
                  ? " line-clamp-1 underline underline-offset-4"
                  : "line-clamp-1"
              }
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/about`}
              className={
                defineActive("/about") ? "underline underline-offset-4" : ""
              }
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/products`}
              className={
                defineActive("/products") ? "underline underline-offset-4" : ""
              }
            >
              {t("products")}
            </Link>
          </li>
          <li>
            <Link
              href={`/${locale}/contact`}
              className={
                defineActive("/contact") ? "underline underline-offset-4" : ""
              }
            >
              {t("contact")}
            </Link>
          </li>

          <li>
            <Link
              href={`/${locale}/blog`}
              className={
                defineActive("/blog") ? "underline underline-offset-4" : ""
              }
            >
              {t("blogs")}
            </Link>
          </li>

          <li>
            <Link
              href={`/${locale}/profile`}
              className={
                defineActive("/profile") ? "underline underline-offset-4" : ""
              }
            >
              {t("profile")}
            </Link>
          </li>
          <li className="relative">
            <span>
              <p className="absolute bottom-4 left-3 text-red-900">
                {data?.length}
              </p>
            </span>
            <Link href={`/${locale}/checkout`}>
              <CartIcon />
            </Link>
          </li>
          <li className="ml-6">{userCookie ? <LogOut /> : null}</li>
          <li>
            <Link href={`/${locale}/admin`}>
              <Image
                src="/admin.svg"
                alt="adminIcon"
                width={30}
                height={30}
                className="dark:stroke-white dark:bg-white rounded-lg"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
