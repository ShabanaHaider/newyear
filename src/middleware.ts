import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Focus on isProtectedRoute - define those routes only one which authenticated user can visit only



 const isProtectedRoute = createRouteMatcher(
     ['/admin', '/payment`'])

    // const isProtectedRoute = createRouteMatcher(
    //   ['/admin'])


export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
  })



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};