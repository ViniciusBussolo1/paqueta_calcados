import Image from 'next/image'
import ButtonNumbers from './ButtonNumbers'

import Logo from '../../assets/logo.png'

export default function Outlet() {
  return (
    <section className="w-full pt-52 flex flex-col items-center">
      <div className="w-[82.071rem]">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col items-end">
            <Image src={Logo} alt="Logo Paquetá" />
            <span className="font-bold text-6xl leading-[3.125rem] uppercase text-orange-500">
              outlet
            </span>
          </div>
          <div className="w-[36.75rem]">
            <p className="text-[1.375rem] leading-[2.25rem] text-black-400 text-right">
              Você também pode escolher o seu novo sapato favorito de acordo com
              a sua numeração.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[82.071rem] mt-[4.625rem] flex justify-between">
        <ButtonNumbers number={33} />
        <ButtonNumbers number={34} />
        <ButtonNumbers number={35} />
        <ButtonNumbers number={36} />
        <ButtonNumbers number={37} />
        <ButtonNumbers number={38} />
        <ButtonNumbers number={39} />
        <ButtonNumbers number={40} />
        <ButtonNumbers number={41} />
        <ButtonNumbers number={42} />
        <ButtonNumbers number={43} />
        <ButtonNumbers number={44} />
      </div>
      <div className="w-[82.071rem] mt-[10.5rem]">
        <div className="w-full flex justify-between ">
          <h2 className="font-semibold text-[2.125rem] leading-[3rem] text-black-800 uppercase">
            Destaques
          </h2>
          <div>
            <span className="text-lg leading-[1.563rem] text-black-400 uppercase cursor-pointer hover:text-black-800">
              Conferir Tudo
            </span>
            <div className="w-[8.6rem] h-[0.063rem] bg-orange-600"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
