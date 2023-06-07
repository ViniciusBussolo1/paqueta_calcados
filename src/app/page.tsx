import Image from 'next/image'

import headPhone from '../assets/icons/headphone.svg'
import location from '../assets/icons/location.svg'

export default function Home() {
  return (
    <header className="h-60 w-screen">
      <div className="h-[3.313rem] w-screen bg-linear-gradient-header flex justify-center items-center px-2">
        <div className="w-[82.75rem] flex justify-between items-center">
          <span className="text-sm text-white font-normal cursor-pointer">
            Loja de Calçados e Moda Online
          </span>
          <div className="flex items-center gap-14">
            <div className="flex gap-3 items-center cursor-pointer">
              <Image src={headPhone} alt="Icon HeadPhone" />
              <span className="text-sm text-white font-medium">
                Fale conosco
              </span>
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <Image src={location} alt="Icon Location" />
              <span className="text-sm text-white font-medium">
                {' '}
                Encontrar uma loja física
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
