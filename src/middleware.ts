import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || ''
  const referer = req.headers.get('referer') || ''

  console.log('User-Agent:', userAgent) // Log do User-Agent para depuração
  console.log('Referer:', referer) // Log do Referer para depuração

  const url = req.nextUrl
  const pathname = url.pathname

  // Permitir recursos estáticos, APIs e navegações internas do Next.js
  if (
    pathname.startsWith('/_next/') || // Recursos estáticos do Next.js
    pathname.includes('.') || // Arquivos estáticos (CSS, JS, imagens, etc.)
    pathname.startsWith('/api/') || // APIs
    req.headers.get('x-nextjs-data') // Navegação interna do Next.js
  ) {
    return NextResponse.next()
  }

  // Reintrodução da verificação de User-Agent
  const suspiciousUserAgents = [
    /saveweb2zip/i,
    /wget/i,
    /curl/i,
    /httpclient/i,
    /webzip/i,
  ]

  const isSuspicious = suspiciousUserAgents.some((pattern) =>
    pattern.test(userAgent),
  )

  if (isSuspicious) {
    console.log('Blocked as suspicious:', userAgent)
    return new Response('<html><body></body></html>', {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    })
  }

  // Permite a requisição se todas as verificações passarem
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
