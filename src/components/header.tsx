import Image from 'next/image'
import Logo from '../../public/logo.svg'
import Bg from '../../public/bgheader.png'

export default function Header() {
  return (
    <div className="w-full relative flex justify-center p-6 bg-[#22130f]">
      <Image
        src={Bg}
        alt="bg"
        quality={100}
        className="absolute top-0 w-full h-full"
      />
      <Image src={Logo} alt="logo" quality={100} className="z-20" />
    </div>
  )
}
