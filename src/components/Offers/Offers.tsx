import Image from 'next/image'

import Arrow from '../../assets/Offers/arrow.svg'
import Line from '../../assets/Offers/line.svg'
import Envelop from '../../assets/Offers/Envelop.svg'
import User from '../../assets/Offers/user.svg'

export default function Offers() {
  return (
    <section className="w-full h-80 bg-linear-gradient-offers mt-[12.625rem] flex justify-center items-center gap-11">
      <h1 className="w-[28.688rem] font-bold text-[2.125rem] leading-[3rem] text-white">
        SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
      </h1>
      <div className="w-[10.75rem] h-[9.375rem] relative">
        <Image src={Line} alt="Line Image" className="absolute bottom-9" />
        <Image
          src={Arrow}
          alt="Arrow Image"
          className="absolute bottom-0 right-0"
        />
      </div>

      <div className="flex flex-col gap-10">
        <span className="font-medium text-xl text-white">
          Nos informe o seu e-mail e nome para o melhor atendimento!
        </span>
        <form className="flex flex-col gap-10">
          <div className="w-full flex flex-col gap-6">
            <div className="flex gap-7">
              <div className="flex flex-col gap-2">
                <div className="flex gap-[1.125rem]">
                  <Image src={Envelop} alt="Icon Envelop" />
                  <input
                    type="email"
                    placeholder="maria@seuemail.com"
                    className="bg-transparent text-lg leading-[1.563rem] placeholder:text-white placeholder:opacity-60 outline-none text-white"
                  />
                </div>
                <div className="w-full h-[0.063rem] bg-white"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-[1.125rem]">
                  <Image src={User} alt="Icon User" />
                  <input
                    type="text"
                    placeholder="Maria da Silva"
                    className="bg-transparent text-lg leading-[1.563rem] placeholder:text-white placeholder:opacity-60 outline-none text-white"
                  />
                </div>
                <div className="w-full h-[0.063rem] bg-white"></div>
              </div>
            </div>

            <div className="flex gap-9">
              <span className="font-medium text-lg leading-[1.563rem] text-white">
                Tenho interesse na categoria:
              </span>
              <div className="flex gap-5">
                <label className="flex items-center gap-3">
                  <input type="radio" name="category" value="masculina" />
                  <div className="custom-radio">
                    <div></div>
                  </div>
                  <span className="text-lg leading-[1.563rem] text-white">
                    Masculina
                  </span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="radio" name="category" value="feminina" />
                  <div className="custom-radio">
                    <div></div>
                  </div>
                  <span className="text-lg leading-[1.563rem] text-white">
                    Feminina
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button className="w-[16.063rem] bg-linear-gradient-button uppercase text-lg leading-5 text-white rounded-sm py-2">
            quero receber
          </button>
        </form>
      </div>
    </section>
  )
}
