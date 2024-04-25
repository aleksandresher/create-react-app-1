import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { i18n } from "../messages/i18n.config";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ka"],

  // Used when no locale matches
  defaultLocale: "en",
});

export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  console.log("middleware on " + url.pathname);

  // internationalization
  const currLocale = (() => {
    //cuurent lang value
    for (let locale of i18n.locales) {
      if (
        url.pathname.startsWith(`/${locale}/`) ||
        url.pathname === `/${locale}`
      ) {
        return locale;
      }
    }
    return null;
  })();

  if (!currLocale) {
    request.nextUrl.pathname = `/${i18n.defaultLocale}${url.pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // authentication
  if (url.pathname === "/login") {
    return undefined;
  }

  let cookie = request.cookies.get("auth");
  // console.log(cookie);

  if (!cookie && url.pathname !== "/ka/login" && url.pathname !== "/en/login") {
    return NextResponse.redirect(new URL("/en/login", request.url));
  }

  const intlResult = intlMiddleware(request);
  if (intlResult) {
    return intlResult;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/(ka|en)",
    "/(ka|en)/about",
    "/(ka|en)/blog",
    "/(ka|en)/contact",
    "/(ka|en)/products",
    "/(ka|en)/profile",
    // "/(ka|en)/:path*",
  ],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
