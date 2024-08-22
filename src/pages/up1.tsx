/* eslint-disable react/no-unescaped-entities */
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Up from '../../public/up.webp'
import Image from 'next/image'
import { Truck } from 'phosphor-react'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Não feche ou saia!</title>
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
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center gap-6 ${inter.className}`}
      >
        <div className="w-screen flex justify-center bg-[#22130f] py-6 px-4 md:py-8">
          <h1 className="w-full text-sm text-white font-bold md:text-3xl md:w-4/5">
            <u>
              <b>ATENÇÃO:</b>
            </u>{' '}
            NÃO CLIQUE EM <b>"VOLTAR"</b> OU FECHE ESSA PÁGINA. ISSO PODE{' '}
            <u>GERAR ERROS</u> NA COMPRA E UMA <u>DUPLA COBRANÇA.</u>
          </h1>
        </div>

        <div className="w-[90%] flex flex-col gap-4">
          <h1 className="text-base font-bold md:text-3xl">
            <u>PARABÉNS!</u> VOCÊ FEZ A <b>ESCOLHA CERTA!</b> SEU PAGAMENTO ESTÁ{' '}
            <u>EM PROCESSAMENTO.</u>
          </h1>
          <h1>
            <b>Enquanto isso</b>, por que não aproveitar para{' '}
            <u>presentear quem você ama?</u>
          </h1>
          <p>
            <b>Exclusivo para você:</b> Nosso urso de pelúcia com{' '}
            <u>desconto especial.</u>
          </p>
          <p>
            <b>Um urso fofo e macio,</b> perfeito para encantar quem você{' '}
            <u>mais ama!</u>
          </p>
          <Image alt="product" src={Up} quality={100} />
          <div>
            <h1 className="text-xl text-red-600">De: R$ 89,90</h1>
            <h1 className="text-2xl font-bold">Por: R$ 29,90</h1>
          </div>
          <a
            href="https://pay.finalizarpagamentoo.online/YEwR3ArOwOPZdKy"
            className="w-full flex justify-center items-center gap-3 p-5 bg-[#64c45b] text-white rounded-lg shadow-xl"
          >
            <h1 className="text-xl font-bold">COMPRAR AGORA!</h1>
            <Truck size={32} weight="bold" color="#ededed" />
          </a>
          <a href="/dwn1" className="underline text-slate-700">
            Vou deixar passar essa chance!
          </a>
        </div>
        <Footer />
      </main>
    </>
  )
}
