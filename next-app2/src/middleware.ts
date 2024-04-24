import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ka"],

  // Used when no locale matches
  defaultLocale: 'en'
});

export default function middleware(request:NextRequest) {
  const url = new URL(request.url);

  if (url.pathname === "/login") {
    return undefined;
  }
  let cookie = request.cookies.get("auth");
  console.log(cookie);

  if (!cookie && url.pathname !== "/ka/login" && url.pathname !== "/en/login") {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }

  const intlResult = intlMiddleware(request);
  if (intlResult) {
    return intlResult;
  }
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/products",
    "/profile",
    // "/(ka|en)/:path*",
  ],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
