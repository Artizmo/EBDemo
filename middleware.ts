import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

/*
To grab the url from x-url from a server component

RSC
  import { headers } from 'next/headers'
  ...
  const h = headers()
  console.log('bingo headers', h.get('x-url'))

*/