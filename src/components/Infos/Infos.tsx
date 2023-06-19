import Image from 'next/image'

import Box from '../../assets/Infos/box.svg'
import Card from '../../assets/Infos/card.svg'
import Discount from '../../assets/Infos/discount.svg'
import Location from '../../assets/Infos/location.svg'
import Replecement from '../../assets/Infos/replacement.svg'

export default function Infos() {
  return (
    <div className="w-full h-[10.188rem] bg-linear-gradient flex justify-center items-center gap-16 px-4">
      <div className="flex gap-5 items-center">
        <Image src={Card} alt="Icon Box" />
        <span className="w-[7.625rem] text-sm text-white font-normal">
          PAGUE EM ATÉ 10X <span className="font-bold">SEM JUROS*</span>
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <Image src={Location} alt="Icon Box" />
        <span className="w-[7.688rem] text-sm text-white font-normal">
          <span className="font-bold">RETIRE GRÁTIS</span> EM NOSSAS LOJAS
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <Image src={Discount} alt="Icon Box" />
        <span className="w-[7.188rem] text-sm text-white font-bold">
          GANHE 20% DE DESCONTO*
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <Image src={Box} alt="Icon Box" />
        <span className="w-[11.188rem] text-sm text-white font-normal">
          {' '}
          <span className="font-bold">FRETE GRÁTIS</span> PARA REGIÕES SUL E
          SUDESTE*
        </span>
      </div>
      <div className="flex gap-5 items-center">
        <Image src={Replecement} alt="Icon Box" />
        <span className="text-sm text-white font-normal">
          PRIMEIRA TROCA GRÁTIS
        </span>
      </div>
    </div>
  )
}
