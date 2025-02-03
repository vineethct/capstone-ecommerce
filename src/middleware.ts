import { NextRequest, NextResponse } from "next/server";
import { PAGE_ROUTES } from "@/lib/constants";

const protectedRoutes = [PAGE_ROUTES.HOME, PAGE_ROUTES.BROWSE];

export default function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl; // Current request path
  const token = req.cookies.get("token"); // JWT from cookies

  if (pathname === PAGE_ROUTES.LOGIN) {
    if (token) {
      return NextResponse.redirect(new URL(PAGE_ROUTES.HOME, req.url));
    }
    return NextResponse.next(); // Allow access to login page
  }

  // Check if the route is protected
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      // Redirect unauthenticated users to login
      return NextResponse.redirect(new URL(PAGE_ROUTES.LOGIN, req.url));
    }

    try {
      // Optional: Verify JWT token (if needed)
      // jwt.verify(token, 'your_jwt_secret');
    } catch {
      return NextResponse.redirect(new URL(PAGE_ROUTES.LOGIN, req.url));
    }
  }

  // Allow public routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
