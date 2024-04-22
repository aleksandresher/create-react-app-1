import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",
});

export default function middleware(request) {
  const intlResult = intlMiddleware(request);
  if (intlResult) {
    return intlResult;
  }
  const url = new URL(request.url);

  if (url.pathname === "/login") {
    return undefined;
  }
  let cookie = request.cookies.get("auth");
  console.log(cookie);

  if (!cookie && url.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: ["/", "/about", "/blog", "/contact", "/products", "/profile"],
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
