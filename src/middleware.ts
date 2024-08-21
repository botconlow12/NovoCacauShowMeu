// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent')?.toLowerCase() || ''
  const isSuspicious = /curl|wget|httpie|saveweb|offline-browser/.test(
    userAgent,
  )
  const isBot =
    req.headers.get('x-requested-with') === 'XMLHttpRequest' ||
    req.headers.get('referer')?.includes('saveweb')

  if (isSuspicious || isBot) {
    return new NextResponse('<html><body></body></html>', {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
