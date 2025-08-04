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
    if (isBot(req)) return true;
    return false;
  },
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
