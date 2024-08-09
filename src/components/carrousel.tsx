import Image from 'next/image'
import Slider from 'react-slick'
import Banner2 from '../../public/banner2.webp'
import Banner3 from '../../public/banner3.webp'
import Banner4 from '../../public/banner4.webp'
import Dep from './dep'
import Dep1 from '../../public/dep1.webp'

export function Carroussel() {
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
    <Slider {...settings} className="w-full">
      <Image alt="banner" src={Banner2} quality={100} />
      <Image alt="banner" src={Banner3} quality={100} />
      <Image alt="banner" src={Banner4} quality={100} />
    </Slider>
  )
}

export function Carroussel2() {
  const settings = {
    arrows: false,
    dots: true,
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
    <Slider {...settings} className="w-full shadow-2xl rounded-xl mb-4">
      <Dep
        name="Mariana A."
        time="há 20 minutos"
        desc="Comprei a caixa branca de chocolates para presentear minha mãe e ela adorou! Os chocolates são muito saborosos e a apresentação da caixa é linda. Valeu cada centavo!"
        picture={Dep1}
        ammount={47}
      />
      <Dep
        name="Beatriz L."
        time="há 3 horas"
        desc="achei que os chocolates viriam estragados ou vencidos mas não, muito bom mesmo, é apenas pequenos detalhes, por exemplo uma barra minha veio quebrada, mas nada que interfira na hora de comer"
        ammount={76}
      />
      <Dep
        name="Ricardo F."
        time="há 1 hora"
        desc="Jurava que não ia chegar, mas chega sim, agora tem chocolate pra família toda 😂"
        ammount={61}
      />
      <Dep
        name="Gustavo M."
        time="há 6 horas"
        desc="Os chocolates da caixa branca são incríveis! um sabor único e delicioso, ótima para presentear ou para se mimar. Super aprovado!"
        ammount={88}
      />
      <Dep
        name="Camila R."
        time="há 1 dia"
        desc="A caixa branca da Cacau Show é perfeita para quem ama chocolate. porque vem muito kkkkkkkk, ideal para dar de presente ou para curtir um momento especial."
        ammount={94}
      />
    </Slider>
  )
}

export function Carroussel3() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1500,
    pauseOnHover: true,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings} className="w-full">
      <div className="w-full flex flex-col items-center">
        <span className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full mb-4 text-2xl font-bold !inline-flex">
          1
        </span>
        <p className="text-xl">Escolha seu Plano</p>
        <p className="text-gray-500">
          Selecione o plano que melhor se adapta a você.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <span className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full mb-4 text-2xl font-bold !inline-flex">
          2
        </span>
        <p className="text-xl">Receba em Casa</p>
        <p className="text-gray-500">
          Todo mês, enviaremos um novo produto Dior diretamente para você.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <span className="w-16 h-16 items-center justify-center bg-gray-200 rounded-full mb-4 text-2xl font-bold !inline-flex">
          3
        </span>
        <p className="text-xl">Experimente e Avalie</p>
        <p className="text-gray-500">
          Teste o produto e nos envie seu feedback.
        </p>
      </div>
    </Slider>
  )
}

export function Carroussel4() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1500,
    pauseOnHover: true,
  }

  return (
    <Slider {...settings} className="w-full">
      <div className="w-full flex flex-col items-center">
        <span className="text-4xl mb-4">✨</span>
        <p className="text-xl font-bold">Novidades Mensais</p>
        <p className="text-gray-500">
          Esteja entre os primeiros a experimentar os lançamentos da Dior.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <span className="text-4xl mb-4">😊</span>
        <p className="text-xl font-bold">Feedback Valoroso</p>
        <p className="text-gray-500">
          Sua opinião é importante para nós e ajuda a melhorar nossos produtos.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <span className="text-4xl mb-4">💸</span>
        <p className="text-xl font-bold">Descontos Exclusivos</p>
        <p className="text-gray-500">
          Receba cupons e descontos especiais para futuras compras.
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <span className="text-4xl mb-4">🔄</span>
        <p className="text-xl font-bold">Flexibilidade</p>
        <p className="text-gray-500">
          Pause ou cancele sua assinatura a qualquer momento.
        </p>
      </div>
    </Slider>
  )
}
