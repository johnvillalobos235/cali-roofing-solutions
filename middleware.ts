import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/videos") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale =
    locales.find((locale) => acceptLanguage.includes(locale)) || defaultLocale;

  // Redirect to locale-prefixed path
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|videos|favicon\\.ico|.*\\.).*)"],
};
