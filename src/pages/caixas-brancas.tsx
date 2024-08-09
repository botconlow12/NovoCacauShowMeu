import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Trophy } from 'phosphor-react'
import Header from '@/components/header'
import { Carroussel } from '@/components/carrousel'
import ProdList from '@/components/prodList'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Mondial() {
  return (
    <>
      <Head>
        <title>Quiz - Cacau Show</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto bg-white ${inter.className}`}
      >
        <Header />
        <Carroussel />
        <div className="w-[90%] flex flex-col gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Trophy size={32} color="#fc7a38" weight="fill" />
            <p className="text-sm">
              <u>Atenção:</u> Permitido apenas um pedido por CPF
            </p>
          </div>
          <ProdList />
        </div>
        <Footer />
      </main>
    </>
  )
}
