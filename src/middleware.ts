import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || ''
  const referer = req.headers.get('referer') || ''

  console.log('User-Agent:', userAgent) // Log do User-Agent para depuração

  // Lista de User-Agents legítimos comuns
  const allowedUserAgents = [
    /Chrome\/\d+/i, // Verifica se contém 'Chrome/' seguido por um número
    /Firefox\/\d+/i, // Verifica se contém 'Firefox/' seguido por um número
    /Safari\/\d+/i, // Verifica se contém 'Safari/' seguido por um número
    /Edg\/\d+/i, // Verifica se contém 'Edg/' seguido por um número (para Microsoft Edge)
    /OPR\/\d+/i, // Verifica se contém 'OPR/' seguido por um número (para Opera)
  ]

  // Lista de User-Agents suspeitos (ferramentas de clonagem conhecidas)
  const suspiciousUserAgents = [
    /saveweb2zip/i,
    /wget/i,
    /curl/i,
    /httpclient/i,
    /webzip/i,
  ]

  // Verifica se é um User-Agent suspeito
  const isSuspicious = suspiciousUserAgents.some((pattern) =>
    pattern.test(userAgent),
  )

  // Verifica se é um User-Agent permitido (navegador comum)
  const isAllowed = allowedUserAgents.some((pattern) => pattern.test(userAgent))

  // Bloqueia se for suspeito e não permitido
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
