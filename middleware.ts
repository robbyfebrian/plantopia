import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/", "/login(.*)", "/register(.*)"],
});
// eror

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
