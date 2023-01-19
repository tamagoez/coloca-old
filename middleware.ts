// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let loginurl = new URL("/login", request.url);
  loginurl.search = `next=${request.url}`;
  return NextResponse.redirect(loginurl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/profile",
};
