import Image from 'next/image'

import Adidas from '../../assets/brands/adidas.svg'
import Bebece from '../../assets/brands/bebece.svg'
import Dumond from '../../assets/brands/dumond.svg'
import ViaMarte from '../../assets/brands/viamarte.svg'

export default function Brands() {
  return (
    <section className="w-full flex justify-center items-center pt-[9.375rem]">
      <div className="w-[82.071rem] flex flex-col gap-20">
        <h2 className="font-semibold text-[2.125rem] text-black-800 leading-[3rem]">
          AS MELHORES MARCAS ESTÃO AQUI!
        </h2>

        <div className="flex items-center justify-between">
          <Image src={Adidas} alt="Image Logo Adidas" />
          <Image src={ViaMarte} alt="Image Logo ViaMarte" />
          <Image src={Bebece} alt="Image Logo Bebece" />
          <Image src={Dumond} alt="Image Logo Dumond" />
        </div>
      </div>
    </section>
  )
}
