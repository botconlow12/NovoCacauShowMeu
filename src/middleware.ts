import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent')
  const referer = req.headers.get('referer')

  // Verificação do User-Agent suspeito
  if (userAgent && /bot|curl|wget|saveweb/i.test(userAgent)) {
    // Retorna uma resposta vazia para user-agents suspeitos
    return new Response('', { status: 200 })
  }

  // Verificação do Referer
  if (referer && !referer.startsWith('https://desafioshow.site')) {
    // Retorna uma resposta vazia para referers inválidos
    return new Response('', { status: 200 })
  }

  // Se não for um bot suspeito, permite a continuidade da requisição
  return NextResponse.next()
}

// Configuração do matcher para definir onde o middleware será aplicado
export const config = {
  matcher: '/:path*', // Aplica o middleware em todas as rotas
}
