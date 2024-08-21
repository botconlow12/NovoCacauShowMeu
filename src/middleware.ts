import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent')
  const referer = req.headers.get('referer')

  // Verificação de User-Agent suspeito
  if (
    userAgent &&
    /saveweb|saveweb2zip|wget|curl|httpclient|webzip/i.test(userAgent)
  ) {
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Verificação de Referer
  if (referer && !referer.startsWith('https://seusite.com')) {
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Verificação de requisições rápidas sucessivas
  const timestamp = Date.now()

  // Obtenha o valor do cookie e converta-o para string
  const lastRequestTime = req.cookies.get('lastRequestTime')?.value || '0'

  // Armazene o novo timestamp como string
  req.cookies.set('lastRequestTime', timestamp.toString())

  // Compare o tempo entre requisições
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
