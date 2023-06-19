import Image from 'next/image'

import LogoFooter from '../../assets/Footer/logo-footer.svg'

export default function Footer() {
  return (
    <footer className="w-full bg-black-400 flex justify-center items-center gap-7 mt-[10.625rem] py-8">
      <span className="text-white font-medium text-xl">
        UMA EMPRESA DO GRUPO
      </span>
      <Image src={LogoFooter} alt="Logo Paqueta" />
    </footer>
  )
}
