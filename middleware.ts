import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/terms",
    "/privacy",
    "/api/webhook/clerk",
    "/api/test(.*)",
    "/api/health-check(.*)",
  ],
  ignoredRoutes: ["/api/webhook/clerk", "/api/health-check"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
