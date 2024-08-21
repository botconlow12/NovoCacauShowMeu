/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    // Verificação avançada de user-agents e cabeçalhos suspeitos
    const userAgent = ctx.req?.headers['user-agent']?.toLowerCase() || ''
    const referer = ctx.req?.headers.referer || ''

    // Verificar se o ambiente é de desenvolvimento
    const isDevelopment = process.env.NODE_ENV === 'development'

    // Filtrar apenas user-agents suspeitos de verdade
    const isSuspicious =
      /curl|wget|httpie|saveweb|offline-browser|postman|insomnia/.test(
        userAgent,
      ) && referer === ''

    // Se a requisição for suspeita e não for ambiente de desenvolvimento, retorna HTML vazio
    if (isSuspicious && !isDevelopment) {
      return {
        ...initialProps,
        html: '<html><body></body></html>', // HTML vazio
      }
    }

    return initialProps
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
            disable-devtool-auto
            src="https://cdn.jsdelivr.net/npm/disable-devtool"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WD62MGGN');
              `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WD62MGGN"
              height="0"
              width="0"
              style={{
                display: 'none',
                visibility: 'hidden',
              }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
