// Without defined matcher this line applies next-auth to the entire project
// This line is not required if using role auth
// export { default } from "next-auth/middleware"

import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// withAuth augments the Request with user's token
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // console.log(request.nextUrl.pathname)
    // console.log(request.nextauth.token)
    if (
      request.nextUrl.pathname.startsWith("/another") &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url))
    }

    if (
      request.nextUrl.pathname.startsWith("/client") &&
      request.nextauth.token?.role !== "admin" &&
      request.nextauth.token?.role !== "manager"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

// Applies next-auth only to matcher routes (can be regex)
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/another", "/client", "/dashboard"] }
