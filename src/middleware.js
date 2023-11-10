import { NextResponse } from "next/server";
export default function middleware(request) {
  // console.log(middleware);
  //   console.log(request);
  //   console.log(request.url);
  //   console.log(request.nextUrl.pathname); // "/login"

  // koi bhi access nhi karne dena hai jab tak user login nhi hai
  //   if (request.nextUrl.pathname != "/login") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  return NextResponse.redirect(new URL("/login", request.url));
}

// ab sirf /about vale sare url ko access karne par mujhe home page show hoga
// we can add more url in that
export const config = {
  matcher: "/about/:path*",
  //   matcher: ["/about/:path*", "/study/:path*"],
};
