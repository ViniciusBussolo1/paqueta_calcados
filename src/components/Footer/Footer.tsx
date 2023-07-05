import Image from 'next/image'

import InfosFooter from './InfosFooter'

import LogoFooter from '../../../public/Footer/logo-footer.svg'

export default function Footer() {
  return (
    <footer className="w-full">
      <InfosFooter />
      <div className="w-full bg-black-400 flex justify-center items-center gap-7 py-8">
        <span className="text-white font-medium text-xl">
          UMA EMPRESA DO GRUPO
        </span>
        <Image src={LogoFooter} alt="Logo Paqueta" />
      </div>
    </footer>
  )
}
