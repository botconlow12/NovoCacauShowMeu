import Image from 'next/image'
import Prod1 from '../../public/prod1/prod1.webp'
import Prod2 from '../../public/prod2/prod1.webp'
import Prod3 from '../../public/prod3/prod1.webp'
import Prod4 from '../../public/prod4/prod1.webp'
import Prod6 from '../../public/prod6/prod1.webp'
import Prod8 from '../../public/prod8/prod1.webp'
import Prod9 from '../../public/prod9/prod1.webp'
import Prod10 from '../../public/prod10/prod1.webp'

const options = [
  {
    title: 'Caixa Branca Cacau Show Tabletes Harry Potter Brasão Hogwarts 750g',
    image: Prod10,
    price: '82,90',
    quantity: 0,
  },
  {
    title: 'Caixa Branca Cacau Show Tablete Dreams Torta de Maracujá 1,04kg',
    image: Prod1,
    price: '67,90',
    quantity: 4,
    href: '/products/1',
  },
  {
    title: 'Caixa Trufas Strudel de Maçã Cacau Show 750g',
    image: Prod2,
    price: '42,90',
    quantity: 5,
    href: '/products/2',
  },
  {
    title: 'Caixa Branca Cacau Show Tabletes Dreams Banoffee 1,040kg',
    image: Prod3,
    price: '64,90',
    quantity: 10,
    href: '/products/3',
  },
  {
    title: 'Caixa Branca Cacau Show Sabor Brownie 750g',
    image: Prod4,
    price: '45,90',
    quantity: 7,
    href: '/products/4',
  },
  {
    title:
      'Caixa de Trufas de Chocolate ao Leite recheio sabor brigadeiro Cacau Show 750g',
    image: Prod6,
    price: '39,90',
    quantity: 12,
    href: '/products/5',
  },
  {
    title: 'Caixa Branca Cacau Show Tablete Lanut Pistache 1kg',
    image: Prod8,
    price: '69,90',
    quantity: 4,
    href: '/products/7',
  },
  {
    title: 'Caixa Branca Cacau Show Petit Deli Oval Mil Folhas 750g',
    image: Prod9,
    price: '49,90',
    quantity: 11,
    href: '/products/8',
  },
]

export default function ProdList() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 p-4">
      {options.map((option, index) => {
        // Define a cor de fundo e o texto com base na quantidade
        const statusColor =
          option.quantity === 0
            ? 'bg-[#ffdcdc] text-[#ff2e2e]' // Esgotado
            : option.quantity <= 4
              ? 'bg-[#ffdcdc] text-[#ff2e2e]' // Vermelho para 1 a 4 unidades
              : option.quantity <= 7
                ? 'bg-[#ffffc7] text-[#847900]' // Amarelo para 5 a 7 unidades
                : 'bg-[#d4f1d4] text-[#2e8b57]' // Verde para acima de 7 unidades

        const availabilityText =
          option.quantity === 0
            ? 'Esgotado'
            : `Restam ${option.quantity} unidades`

        return (
          <a
            key={index} // Corrigido para usar a chave corretamente
            href={option.href} // Atualize o href com o destino correto
            className="w-full h-[310px] flex flex-col items-center gap-2"
          >
            <div
              className="h-full flex flex-col gap-2 p-3 rounded-xl bg-white text-[#333]" // Fundo branco para o componente
              style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
              <Image
                alt={option.title}
                src={option.image}
                quality={100}
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-xs text-center font-bold text-[#333]">
                {option.title}
              </h1>
              <p
                className={`text-xs py-[3px] px-[8px] rounded-xl ${statusColor}`} // Ajuste de cor para o texto de disponibilidade
              >
                {availabilityText}
              </p>
              <h1 className="w-full text-left text-lg text-[#333] font-bold">
                R${option.price}
              </h1>
            </div>
          </a>
        )
      })}
    </div>
  )
}
