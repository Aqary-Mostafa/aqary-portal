import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const { pathname } = request.nextUrl;
  const locale = request.nextUrl.locale || routing?.defaultLocale;

  // const isAuthenticated = !!request.cookies.get('aqaryUser');
  // const isDashboardRoute = pathname.startsWith(`/${locale}/dashboard`);
  // const isAuthRoute = pathname === `/${locale}/login`;

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // if (isDashboardRoute && !isAuthenticated) {
  //   const url = request.nextUrl.clone();
  //   url.searchParams.set('next', url.pathname);
  //   url.pathname = `/${locale}/login`;
  //   return NextResponse.redirect(url);
  // }

  // if (isAuthenticated && isAuthRoute) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = `/${locale}/dashboard/`;
  //   return NextResponse.redirect(url);
  // }

  return response;
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|favicon.ico|[\\w-]+\\.[\\w]+|images(?:/.*)?).*)',
    '/:locale(en|ar)/dashboard/:path*',
    '/:locale(en|ar)/login',
  ],
};
