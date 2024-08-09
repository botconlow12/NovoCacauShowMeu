import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Archivo } from 'next/font/google'
import {
  ArrowLeft,
  CalendarCheck,
  CaretDown,
  CreditCard,
  PlusCircle,
  ShieldCheck,
  Star,
  Truck,
  X,
} from 'phosphor-react'
import Svg1 from '../../../public/svg1.svg'
import Svg2 from '../../../public/svg2.svg'
import Svg3 from '../../../public/svg3.svg'
import Svg4 from '../../../public/svg4.svg'
import Svg5 from '../../../public/svg5.svg'
import Svg6 from '../../../public/svg6.svg'
import Svg7 from '../../../public/svg7.svg'
import Svg8 from '../../../public/svg8.svg'
import Svg9 from '../../../public/svg9.svg'
import Svg10 from '../../../public/svg10.svg'
import Svg11 from '../../../public/svg11.svg'
import Svg12 from '../../../public/svg12.svg'
import Svg13 from '../../../public/svg13.svg'
import Pix from '../../../public/pix.svg'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import productsData from './products.json'
import Slider from 'react-slick'
import { Carroussel2 } from '@/components/carrousel'
import Footer from '@/components/footer'

const inter = Archivo({ subsets: ['latin'] })

export default function Sauvage() {
  const [modal, setModal] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState('pix')
  const router = useRouter()
  const { id } = router.query

  const productData = [...productsData.products].find(
    (product) => product.id === parseInt(id as string),
  )
  if (!productData) {
    return <p>Vídeo não encontrado</p>
  }

  if (!productData.images || productData.images.length === 0) {
    return <p>Imagens não disponíveis para este produto</p>
  }

  const handlePaymentSelection = (method: string) => {
    setSelectedPayment(method)
  }

  const changeModal = () => {
    setModal(!modal)
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true,
  }

  return (
    <>
      <Head>
        <title>{productData.title}</title>
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
        className={`w-full min-h-screen flex flex-col items-center justify-start text-center mx-auto gap-4 bg-white ${inter.className}`}
      >
        {modal && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#00000050] z-30">
            <div className="relative w-[95%] h-max flex flex-col items-center justify-center p-6 gap-4 rounded-xl bg-white md:w-1/3 animate-fade-in">
              <X
                size={22}
                weight="bold"
                className="absolute right-3 top-3"
                onClick={changeModal}
              />
              <h1 className="text-xl font-bold">FORMAS DE PAGAMENTO</h1>
              <div className="w-full flex justify-center gap-4">
                {/* <div
                  onClick={() => handlePaymentSelection('credit-card')}
                  className={`w-[110px] flex flex-col justify-center items-center p-2 border rounded-lg cursor-pointer ${
                    selectedPayment === 'credit-card' ? 'border-black' : ''
                  }`}
                >
                  <CreditCard size={32} weight="fill" />
                  <p className="text-[11px]">Cartão de crédito</p>
                </div> */}
                <div
                  onClick={() => handlePaymentSelection('pix')}
                  className={`w-[110px] flex flex-col justify-center items-center gap-2 p-2 border rounded-lg cursor-pointer ${
                    selectedPayment === 'pix' ? 'border-black' : ''
                  }`}
                >
                  <Image
                    alt="pix"
                    src={Pix}
                    quality={100}
                    className="w-[22px] invert"
                  />
                  <p className="text-[11px]">Pix</p>
                </div>
              </div>
              {/* {selectedPayment === 'credit-card' && (
                <div className="w-full">
                  <div className="w-full flex justify-between bg-[#f2f3f4] text-xs text-[#565c69] py-[3px] px-[7px] rounded-[4px]">
                    <p>À vista</p> <p>Total: R$ {productData.price}</p>
                  </div>
                  <p className="underline mt-3">Ou no cartão em até 12x!</p>
                </div>
              )} */}
              {selectedPayment === 'pix' && (
                <div className="w-full flex flex-col items-center gap-4">
                  <div>
                    <h1 className="text-[24px] font-bold">
                      R$ {productData.price}
                    </h1>
                    <p className="text-xs">À vista no PIX</p>
                  </div>
                  <div className="w-full h-[2px] bg-black" />
                  <div className="w-[75%] flex items-center gap-3">
                    <CalendarCheck
                      size={32}
                      weight="fill"
                      className="flex-shrink-0"
                    />
                    <p className="text-[11px] text-[#565c69]">
                      Pague com o PIX e priorizamos o despacho em 3 horas!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <Header />
        <div className="w-[90%] flex flex-col items-center justify-center gap-4">
          <a
            href="/caixas-brancas"
            className="w-full flex items-center gap-2 font-bold text-base underline"
          >
            <ArrowLeft size={22} weight="bold" />
            VOLTAR
          </a>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-2xl text-left font-bold">
              {productData.title}
            </h1>
            <Slider {...settings} className="w-full">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="max-w-full h-auto"
                />
              ))}
            </Slider>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <div className="w-full flex flex-col items-start justify-center gap-3">
            <p className="text-left text-lg text-black">
              <b>50% do valor gerado</b> com as vendas será destinado a{' '}
              <b>causas sociais</b>.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
                <Star size={16} weight="fill" color="#ffd700" />
              </div>
              <p>5.0 ({productData.rate}) Avaliações</p>
            </div>
            <h1 className="text-[#282828] text-3xl font-bold">
              R$ {productData.price}
            </h1>
            {/* <div className="flex items-center gap-2">
              <CreditCard size={18} />
              <p className="text-[15px]">
                em até 12x de <b>R$ {productData.parcelamento}</b>
              </p>
            </div> */}
            <div className="flex items-center gap-2">
              <Image
                alt="pix"
                src={Pix}
                quality={100}
                className="w-[16px] invert"
              />
              <p className="text-[15px]">
                <b>À vista no pix</b>
              </p>
            </div>
            <div
              onClick={changeModal}
              className="flex items-center gap-1 px-2 py-1 border rounded-md"
            >
              <PlusCircle size={18} weight="bold" />
              <p>Formas de pagamento</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <a
            href={productData.href}
            className="w-full flex justify-center items-center gap-3 p-5 bg-[#64c45b] text-white rounded-lg shadow-xl"
          >
            <h1 className="text-xl font-bold">COMPRAR AGORA!</h1>
            <Truck size={32} weight="bold" color="#ededed" />
          </a>
          <div className="w-full flex flex-col gap-2 p-2 border rounded-lg">
            <div className="w-full flex items-center justify-center gap-3 py-1 rounded-lg bg-[#f6f6f8] text-[#565656]">
              <CreditCard size={18} weight="bold" />
              <p className="font-bold">FORMAS DE PAGAMENTO</p>
            </div>
            <div className="w-full flex justify-center gap-2">
              <Image alt="metodo" src={Svg1} quality={100} width={40} />
              <Image alt="metodo" src={Svg2} quality={100} width={40} />
              <Image alt="metodo" src={Svg3} quality={100} width={40} />
              <Image alt="metodo" src={Svg4} quality={100} width={40} />
              <Image alt="metodo" src={Svg5} quality={100} width={40} />
              <Image alt="metodo" src={Svg6} quality={100} width={40} />
              <Image alt="metodo" src={Svg7} quality={100} width={40} />
            </div>
          </div>
          <div className="w-full flex items-center gap-4 p-3 border rounded-lg">
            <ShieldCheck size={32} />
            <div className="flex flex-col items-start gap-2">
              <p className="text-[#8f8f8f] text-[12px]">
                Pagamentos e informações estão seguros
              </p>
              <p className="text-[#8f8f8f] text-[12px]">
                Site oficial com todos os direitos reservados
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 p-3 border rounded-lg">
            <ShieldCheck size={32} />
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-[14px]">Devoluções Gratuitas</h1>
              <p className="text-[#8f8f8f] text-[12px]">
                Estorno de 100% do seu dinheiro
              </p>
              <p className="text-[#8f8f8f] text-[12px]">
                7 dias após o recebimento da mercadoria.
              </p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex justify-between">
              <p className="text-[13px] font-bold">DESCRIÇÃO</p>
              <CaretDown size={18} />
            </div>
            <p className="text-left font-light">{productData.desc}</p>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h1 className="font-bold text-lg">AVALIAÇÕES DOS USUÁRIOS</h1>
            <Carroussel2 />
          </div>

          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <div className="w-[70%] flex flex-col items-center gap-2">
            <h1 className="w-full text-center font-bold text-[13px]">
              FORMAS DE PAGAMENTO
            </h1>
            <div className="w-full flex flex-wrap justify-center gap-[15px]">
              <Image alt="metodo" src={Svg1} quality={100} width={40} />
              <Image alt="metodo" src={Svg2} quality={100} width={40} />
              <Image alt="metodo" src={Svg3} quality={100} width={40} />
              <Image alt="metodo" src={Svg4} quality={100} width={40} />
              <Image alt="metodo" src={Svg5} quality={100} width={40} />
              <Image alt="metodo" src={Svg6} quality={100} width={40} />
              <Image alt="metodo" src={Svg7} quality={100} width={40} />
              <Image alt="metodo" src={Svg8} quality={100} width={40} />
              <Image alt="metodo" src={Svg9} quality={100} width={40} />
              <Image alt="metodo" src={Svg10} quality={100} width={40} />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
          <div className="w-full flex flex-col items-center gap-2">
            <h1 className="w-full font-bold text-[13px]">LOJA VERIFICADA</h1>
            <div className="w-full flex justify-start gap-[15px]">
              <Image
                alt="metodo"
                src={Svg11}
                quality={100}
                className="w-full"
              />
              <Image
                alt="metodo"
                src={Svg12}
                quality={100}
                className="w-full"
              />
              <Image
                alt="metodo"
                src={Svg13}
                quality={100}
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#e3e3e3]" />
        </div>
        <Footer />
      </main>
    </>
  )
}
