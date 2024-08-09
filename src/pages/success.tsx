import { Archivo } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/header'
import Image from 'next/image'
import testimonialImage1 from '../../public/01.png'
import { Carroussel3, Carroussel4 } from '@/components/carrousel'
import Faq from '@/components/faq'
import Dep1 from '../../public/dep2.webp'
import Dep2 from '../../public/dep3.webp'
import ScrollButton from '@/components/scrollButton'

const inter = Archivo({ subsets: ['latin'] })

export default function AssinaturaCacauShow() {
  return (
    <>
      <Head>
        <title>Cacau Show - Assinatura de Chocolates</title>
        <meta
          name="description"
          content="Assine e receba os melhores chocolates da Cacau Show todos os meses!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center text-center mx-auto ${inter.className} bg-gray-100`}
      >
        <Header />

        <div
          style={{
            backgroundImage: `url(${testimonialImage1.src})`, // Define a imagem como background
            backgroundSize: 'cover', // Garante que a imagem cubra todo o background
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full flex flex-col items-center justify-center py-6 px-4 text-white"
        >
          <h1
            style={{ textShadow: '0px 0px 20px #000' }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <u>Descubra</u> Novos Chocolates Cacau Show <u>Todos os Meses!</u>
          </h1>
          <p
            style={{ textShadow: '0px 0px 20px #000' }}
            className="text-xl md:text-2xl mb-8"
          >
            Assine e Receba <b>Lançamentos Exclusivos</b>{' '}
            <u>Direto em sua Casa</u>
          </p>
          <ScrollButton
            sectionId="scroll1"
            title="Assine Agora e Receba seu Primeiro Chocolate"
          />
        </div>

        {/* Seção Como Funciona */}
        <section className="w-[90%] py-10 px-6 flex flex-col justify-center items-center gap-8 bg-gray-50 mt-10 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold">
            Como Funciona Nossa Proposta
          </h2>
          <Carroussel3 />
        </section>

        {/* Seção Benefícios da Assinatura */}
        <section className="w-[90%] py-10 px-6 flex flex-col justify-center items-center gap-8 bg-gray-50 mt-10 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold">
            Vantagens Exclusivas para Assinantes
          </h2>
          <Carroussel4 />
        </section>

        {/* Seção Testemunhos */}
        <section className="w-[90%] py-10 px-6 bg-white shadow-lg rounded-lg mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-4">
            <div className="w-full flex flex-col items-center text-left md:w-1/3">
              <Image
                src={Dep2}
                alt="Cliente satisfeito"
                className="w-[50%] mb-4 rounded-full"
              />
              <p className="text-gray-600">
                &quot;A assinatura de chocolates Cacau Show transformou minha
                experiência de compra. Todo mês, um novo sabor na minha
                porta!&quot;
              </p>
              <p className="w-full font-bold mt-2">- Maria S.</p>
            </div>
            <div className="w-full flex flex-col items-center text-left md:w-1/3">
              <Image
                src={Dep1}
                alt="Cliente satisfeito"
                className="w-[50%] mb-4 rounded-full"
              />
              <p id="scroll1" className="text-gray-600">
                &quot;Adoro experimentar os novos lançamentos e contribuir com
                meu feedback. E os descontos exclusivos são incríveis!&quot;
              </p>
              <p className="w-full font-bold mt-2">- João P.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <div className="w-[90%] py-10 px-6 bg-white text-center shadow-lg rounded-lg mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não Perca Mais Tempo!
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Assine Hoje e Experimente o Prazer dos Chocolates Cacau Show
          </p>
          <a
            href="https://pay.finalizarpagamentoo.online/lDW0Za2PM74GN7E"
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
          >
            Assinar Agora
          </a>
        </div>

        {/* Seção Perguntas Frequentes */}
        <section className="w-[90%] py-10 px-6 bg-gray-50 rounded-lg shadow-lg mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Perguntas Frequentes
          </h2>
          <Faq
            title="Por que motivo a Cacau Show está a efetuar testes de produtos?"
            desc="As avaliações de produtos na Internet estão a tornar-se cada vez mais importantes e representam um dos critérios de decisão mais importantes para uma compra para a maioria dos clientes. As avaliações de produtos também oferecem informações sobre a qualidade ou funcionalidade do produto do ponto de vista do cliente e, por conseguinte, são importantes para nós enquanto fabricante. Com base no feedback do cliente, podemos tomar medidas para melhorar o produto ou, possivelmente, retirá-lo da gama."
          />
          <Faq
            title="Posso também escrever avaliações negativas?"
            desc="A objetividade e a honestidade são as principais prioridades nos nossos testes de produtos. Deve expressar a sua opinião honesta sobre o produto do teste na avaliação. Uma classificação negativa não tem qualquer influência sobre a seleção para futuros testes de produtos."
          />
          <Faq
            title="Recebi o produto do teste. O que devo fazer agora?"
            desc="Nos próximos dias, receberá um e-mail da nossa parte que o informará oficialmente sobre o início da fase de teste. Poderá então, começar a avaliar o seu produto."
          />
          <Faq
            title="Posso cancelar minha assinatura a qualquer momento?"
            desc="Sim, você pode pausar ou cancelar sua assinatura a qualquer momento, sem complicações."
          />
        </section>

        {/* Footer */}
        <footer className="w-full py-8 px-4 bg-black text-white text-center mt-10">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex">
              <p className="text-gray-400 hover:text-white mx-2 transition underline">
                Termos de Serviço
              </p>
              <p className="text-gray-400 hover:text-white mx-2 transition underline">
                Política de Privacidade
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-400">
              Endereço: Av. Magalhães de Castro, 12000 - Jardim Panorama, São
              Paulo - SP
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
