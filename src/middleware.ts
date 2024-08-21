import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent')
  const referer = req.headers.get('referer')

  // Ajuste na verificação do User-Agent para ser menos agressiva
  if (userAgent && /saveweb2zip|wget|curl|httpclient|webzip/i.test(userAgent)) {
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Verificação de Referer inválido
  if (referer && !referer.startsWith('https://seusite.com')) {
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Verificação de requisições rápidas sucessivas
  const timestamp = Date.now()

  const lastRequestTime = req.cookies.get('lastRequestTime')?.value || '0'

  req.cookies.set('lastRequestTime', timestamp.toString())

  if (timestamp - parseInt(lastRequestTime) < 1000) {
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
