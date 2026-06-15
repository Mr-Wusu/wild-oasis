// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("better-auth.session_token");
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");

  if ((isAdminRoute || isProtectedRoute) && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
