import { ChevronRight } from 'lucide-react'

import Teste from '../../assets/teste.svg'
import Image from 'next/image'

import Instagram from '../../assets/PageShoe/Social/instagram.svg'
import Facebook from '../../assets/PageShoe/Social/facebook.svg'
import Twitter from '../../assets/PageShoe/Social/twitter.svg'
import Youtube from '../../assets/PageShoe/Social/youtube.svg'
import Pinterest from '../../assets/PageShoe/Social/pinterest.svg'

import Heart from '../../assets/PageShoe/heart.svg'

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
        <div className="h-[52.25rem] w-[33.625rem] flex flex-col gap-16 bg-red-400">
          <div>
            <Image src={Heart} alt="Icon Heart" />
            <h2>SCARPIN VIZZANO VERDE SALTO ALTO</h2>
            <span>Código do produto: 365087-2001152093</span>
          </div>
          <div>
            <div>
              <span>R$199,00</span>
              <div>
                <span>21% DE DESCONTO</span>
              </div>
            </div>
            <div>
              <span>R$ 149,99</span>
              <span>ou 9x R$ 16,66</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
