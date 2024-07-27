import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname == '/') {
    return NextResponse.redirect(new URL('/chat', req.url));
  }
  if (pathname == '/mail/inbox') {
    return NextResponse.redirect(new URL('/mail/inbox/1', req.url))
  }
  return NextResponse.next();
}