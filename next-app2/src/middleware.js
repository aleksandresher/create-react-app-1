// import { redirect } from "next/dist/server/api-utils";
// import { NextResponse } from "next/server";
// import { useRouter } from "next/router";
// const URL = process.env.BASE_URL;
// export function middleware(request) {
//   let cookie = request.cookies.get("auth");
//   console.log(cookie);
//   const url = new URL(request.url);

//   //   const url = request.nextUrl.clone();
//   //   url.pathname = "/login";

//   if (!cookie && url.pathname !== `${URL}/login`) {
//     return NextResponse.redirect(new URL(`${URL}/login`, request.url));
//   }
// }
