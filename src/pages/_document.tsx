/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/document'

class MyDocument extends Document {
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  if (document.body.innerHTML.trim() === '') {
                    document.body.innerHTML = '<div>Conteúdo dinâmico carregado</div>';
                  }
                });

                // Adiciona uma camada extra de proteção para imagens
                document.addEventListener('DOMContentLoaded', function() {
                  const images = document.querySelectorAll('img');
                  images.forEach(img => {
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPHBhdGggZD0iTTEwMCAwTDIwMCAxMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYz0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS1kaWamYW0tYm94LXNoYXBlPSIxIiAvPjwvc3ZnPg=='; // Imagem vazia
                  });
                });
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
