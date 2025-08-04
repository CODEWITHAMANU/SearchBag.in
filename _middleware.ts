import { authMiddleware } from "@clerk/nextjs";

const isBot = (req: Request) => {
  const ua = req.headers.get("user-agent") || "";
  return /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|facebookexternalhit|Twitterbot/i.test(ua);
};

export default authMiddleware({
  publicRoutes: [
    '/',
    '/about',
    '/contact',
    '/all-products',
    '/product/(.*)',
    '/api/(.*)',
  ],
  ignoredRoutes: (req) => {
    const path = new URL(req.url).pathname;
    const publicPaths = [
      '/',
      '/about',
      '/contact',
      '/all-products',
      /^\/product\/.*/,
      /^\/api\/.*/,
    ];

    const isPublic = publicPaths.some(publicPath =>
      typeof publicPath === 'string'
        ? path === publicPath
        : publicPath.test(path)
    );

    return isBot(req) && isPublic;
  },
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};