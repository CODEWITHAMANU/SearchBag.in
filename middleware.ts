import { authMiddleware } from "@clerk/nextjs";

const isBot = (req: Request) => {
  const ua = req.headers.get("user-agent") || "";
  return /Googlebot|Bingbot|Slurp/i.test(ua);
};

export default authMiddleware({
  publicRoutes: [
    '/',
    '/about',
    '/contact',
    '/all-products',
    '/product/(.*)',
    '/api/(.*)'
  ],
  ignoredRoutes: (req) => {
    // Bypass middleware completely for:
    // 1. Googlebot on public routes
    // 2. Static files
    const path = new URL(req.url).pathname;
    const isPublic = [
      '/',
      '/about',
      '/contact',
      '/all-products',
      /^\/product\/.*/,
      /^\/api\/.*/,
      /\.(ico|svg|png|jpg|jpeg|css|js)$/i
    ].some(route =>
      typeof route === 'string' ? path === route : route.test(path)
    );

    return isBot(req) || isPublic;
  },
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};