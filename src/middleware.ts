import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent')
  const referer = req.headers.get('referer')

  // Verificar user-agents suspeitos ou comportamento suspeito
  if (
    userAgent &&
    /saveweb|saveweb2zip|wget|curl|httpclient|webzip/i.test(userAgent)
  ) {
    // Retorna um HTML vazio se detectar um user-agent suspeito
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Verificação de referer ou qualquer outra condição que queira adicionar
  if (referer && !referer.startsWith('https://desafioshow.site')) {
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*', // Aplica o middleware em todas as rotas
}
