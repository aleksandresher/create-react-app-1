import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);

  if (url.pathname === "/login") {
    return undefined;
  }
  let cookie = request.cookies.get("auth");
  console.log(cookie);
  if (!cookie && url.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
