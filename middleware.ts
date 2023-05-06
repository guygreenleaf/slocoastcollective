import { NextRequest, NextResponse } from 'next/server';

const Middleware = (req:NextRequest) => {
  if (req.nextUrl.pathname[0] == req.nextUrl.pathname[0].toUpperCase())
    return NextResponse.next();

  return NextResponse.redirect(new URL(`${req.nextUrl.origin}${req.nextUrl.pathname[0].toUpperCase()}${req.nextUrl.pathname.slice(1).toLowerCase()}`));
};

export default Middleware;