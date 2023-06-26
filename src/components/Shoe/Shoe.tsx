import { ChevronRight } from 'lucide-react'

import Teste from '../../assets/teste.svg'
import Image from 'next/image'

import Instagram from '../../assets/PageShoe/Social/instagram.svg'
import Facebook from '../../assets/PageShoe/Social/facebook.svg'
import Twitter from '../../assets/PageShoe/Social/twitter.svg'
import Youtube from '../../assets/PageShoe/Social/youtube.svg'
import Pinterest from '../../assets/PageShoe/Social/pinterest.svg'

import Heart from '../../assets/PageShoe/heart.svg'
import ButtonNumbersShoe from './ButtonNumbersShoe'

interface ShoeProps {
  params: {
    id: string
  }
}
export default function Shoe({ params }: ShoeProps) {
  return (
    <div className="w-screen h-screen flex justify-center pt-[4.375rem]">
      <div className="flex gap-5">
        <div className="h-[52.25rem] w-[52.25rem] flex flex-col gap-16">
          <div className="flex items-center gap-2">
            <span className="text-lg leading-[1.575rem] text-black-400 opacity-60">
              Paquetá
            </span>
            <span>
              <ChevronRight size={16} className="opacity-60" />{' '}
            </span>
            <div>
              <span className="text-lg leading-[1.575rem] font-medium text-black-400">
                Scarpin
              </span>{' '}
              <div className="h-[0.063rem] w-full bg-orange-500"></div>
            </div>
          </div>
          <Image src={Teste} alt="teste" />
          <div className="flex flex-col gap-3">
            <span>Compartilhe</span>
            <div className="flex items-center gap-3">
              <Image
                src={Instagram}
                width={24}
                height={24}
                alt="Icons Instagram"
                className="cursor-pointer"
              />
              <Image
                src={Facebook}
                width={14}
                height={25}
                alt="Icons Facebook"
                className="cursor-pointer"
              />
              <Image
                src={Twitter}
                width={28}
                height={23}
                alt="Icons Twitter"
                className="cursor-pointer"
              />
              <Image
                src={Youtube}
                width={29}
                height={20}
                alt="Icons Youtube"
                className="cursor-pointer"
              />
              <Image
                src={Pinterest}
                width={22}
                height={25}
                alt="Icons Pinterest"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="h-[52.25rem] w-[33.625rem] flex flex-col gap-16 pt-14">
          <div className="flex flex-col gap-2">
            <Image src={Heart} alt="Icon Heart" />
            <h2 className="text-[2.5rem] leading-[3.125rem] font-semibold text-black-800">
              SCARPIN VIZZANO VERDE SALTO ALTO
            </h2>
            <span className="text-lg leading-[1.575rem] text-black-400 opacity-80">
              Código do produto: 365087-2001152093
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <span className="text-[1.375rem] leading-[1.925rem] text-black-400 opacity-80 line-through">
                R$199,00
              </span>
              <div className="w-[10.688rem] h-[1.313rem] bg-green-500 flex justify-center items-center rounded">
                <span className="text-sm leading-[1.4rem] font-semibold text-white">
                  21% DE DESCONTO
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[2.5rem] leading-[3.5rem] font-bold text-black-800">
                R$ 149,99
              </span>
              <span className="text-xl font-medium text-black-400 opacity-60">
                ou 9x R$ 16,66
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-lg leading-[1.575rem] text-black-400 opacity-80">
              Escolha a numeração:
            </span>
            <div className="flex gap-[2.169rem]">
              <ButtonNumbersShoe number={34} soldOut={true} />
              <ButtonNumbersShoe number={35} />
              <ButtonNumbersShoe number={36} soldOut={true} />
              <ButtonNumbersShoe number={37} />
              <ButtonNumbersShoe number={38} />
              <ButtonNumbersShoe number={39} />
              <ButtonNumbersShoe number={40} />
            </div>
            <span className="text-base leading-[1.4rem] font-bold text-black-400 opacity-60 mt-3">
              Guia de tamanhos
            </span>
          </div>

          <button className="text-[2.1rem] leading-[110%] uppercase text-white bg-linear-gradient-button py-3 px-4 rounded">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
