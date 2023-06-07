import Image from 'next/image'

import Logo from '../assets/logo.png'
import HeadPhone from '../assets/icons/headphone.svg'
import Location from '../assets/icons/location.svg'
import Heart from '../assets/icons/heart.svg'
import Bag from '../assets/icons/bag.svg'
import People from '../assets/icons/people.svg'

export default function Home() {
  return (
    <header className="h-60 w-screen flex flex-col items-center">
      <div className="h-[3.313rem] w-screen bg-linear-gradient-header flex justify-center items-center px-2">
        <div className="w-[82.75rem] flex justify-between items-center">
          <span className="text-sm text-white font-normal cursor-pointer">
            Loja de Calçados e Moda Online
          </span>
          <div className="flex items-center gap-14">
            <div className="flex gap-3 items-center cursor-pointer">
              <Image src={HeadPhone} alt="Icon HeadPhone" />
              <span className="text-sm text-white font-medium">
                Fale conosco
              </span>
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <Image src={Location} alt="Icon Location" />
              <span className="text-sm text-white font-medium">
                {' '}
                Encontrar uma loja física
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[83.625rem] pt-[0.938rem] pb-[1.125rem]">
        <div className="w-full flex justify-between items-center">
          <Image src={Logo} alt="Logo" />

          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <Image src={Heart} alt="Icon Heart" />
              <span className="text-sm text-black-400 font-normal">
                Lista de desejos
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={Bag} alt="Icon Bag" />
              <span className="text-sm text-black-400 font-normal">Sacola</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={People} alt="Icon People" />
              <span className="text-sm text-black-400 font-normal">Entrar</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
