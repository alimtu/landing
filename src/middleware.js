// middleware.ts
import { NextResponse } from 'next/server'
import { getToken }    from 'next-auth/jwt'

const publicPaths = ['/login', '/register', '/forgot-password', '/api/auth']

export async function middleware(request) {
  // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  // const { pathname, origin } = request.nextUrl
 
  // const isPublicPath = publicPaths.some(path => pathname.startsWith(path))

  // if (!token && !isPublicPath) {
  //   const loginUrl = new URL('/login', origin)
  //   loginUrl.searchParams.set('from', pathname)
  //   return NextResponse.redirect(loginUrl)
  // } 
 
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public|fonts).*)',
  ],
}
