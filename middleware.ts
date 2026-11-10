import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fa', 'en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(fa|en|ar)/:path*', '/((?!api|admin|_next|_vercel|.*\\..*).*)'],
};
