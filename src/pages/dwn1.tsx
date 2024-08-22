import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Truck } from 'phosphor-react'

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
        className={`w-[90%] min-h-screen flex flex-col items-center justify-start text-center mx-auto gap-6 md:w-4/5 md:gap-8 ${inter.className}`}
      >
        <div className="w-screen flex justify-center bg-[#22130f] p-4 md:py-6">
          <h1 className="w-full text-3xl underline font-black text-white md:text-4xl md:w-4/5">
            DESCONTO ATIVADO!
          </h1>
        </div>
        <div className="text-xl">
          <h1 className="font-bold md:text-4xl">VOCÊ GANHOU UM</h1>
          <h1 className="font-black bg-[#6aee00] rounded-xl py-1 px-3 md:text-4xl">
            DESCONTO ADICIONAL DE 33%
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-lg font-bold md:text-xl">
          <p>
            NÓS <b>NÃO QUEREMOS</b> QUE <u>O PREÇO</u> TE IMPEÇA DE{' '}
            <u>PRESENTEAR QUEM VOCÊ AMA!</u>
          </p>
          <p className="text-sm underline font-black">
            POR ISSO, RESOLVEMOS FAZER ALGO INÉDITO...
          </p>
          <p>
            VAMOS TE DAR UM{' '}
            <span className="text-[#ff0000]">
              <u>DESCONTO IMEDIATO DE 33%</u>
            </span>{' '}
            NO URSO DE PELÚCIA
          </p>
          <p>
            POR APENAS{' '}
            <span className="bg-[#6aee00] rounded-md p-1 font-black">
              R$ 19,90!
            </span>
          </p>
          <p>
            MAS VOCÊ PRECISA <span className="text-[#ff0000]">AGIR AGORA,</span>{' '}
            POIS ESSE <u>DESCONTO EXCLUSIVO</u> ESTÁ DISPONÍVEL POR{' '}
            <u>TEMPO LIMITADO!</u>
          </p>
          <p className="text-[#00CF37]">
            CLIQUE NO BOTÃO ABAIXO PARA GARANTIR SEU URSO COM DESCONTO:
          </p>
          <a
            href="https://pay.finalizarpagamentoo.online/zj6aGnd9L9l3wlK"
            className="w-full flex justify-center items-center gap-3 p-5 bg-[#64c45b] text-white rounded-lg shadow-xl"
          >
            <h1 className="text-xl font-bold">COMPRAR AGORA!</h1>
            <Truck size={32} weight="bold" color="#ededed" />
          </a>
        </div>
      </main>
    </>
  )
}
