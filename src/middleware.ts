import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || ''
  const referer = req.headers.get('referer') || ''

  console.log('User-Agent:', userAgent) // Adicione este log para depurar o User-Agent

  // Lista de User-Agents legítimos comuns (exemplos para Chrome, Firefox, Safari)
  const allowedUserAgents = [
    /Chrome/i,
    /Firefox/i,
    /Safari/i,
    /Edge/i,
    /Opera/i,
  ]

  // Lista de User-Agents suspeitos (ferramentas de clonagem conhecidas)
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
  const isAllowed = allowedUserAgents.some((pattern) => pattern.test(userAgent))

  // Ajuste a lógica para bloquear somente se for suspeito e não for um navegador legítimo
  if (isSuspicious && !isAllowed) {
    console.log('Blocked as suspicious:', userAgent)
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
