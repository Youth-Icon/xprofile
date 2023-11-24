// import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(req: NextRequest) {
  // Retrieving the user session information
  // const session = await getSession();

  const session = await getToken ( { req: req, secret: process.env.NEXTAUTH_SECRET });


  // Extracting the pathname from the requested URL
  const pathname = req.nextUrl.pathname;

  // Checking if the requested path is public (no authentication required)
  const isPublicPath =
    pathname === '/login' || pathname === '/signup' || pathname === '/';

  // Redirecting the user if they are authenticated but trying to access a public path
  if (session && isPublicPath) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
  // Redirecting the user to the login page if they are not authenticated and trying to access a protected path
  else if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
}

export const config = {
  // Specifying the paths that the middleware should be applied to
  matcher: ['/', '/profile', '/profile/:path*'],
};
