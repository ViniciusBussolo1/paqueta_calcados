import Image from 'next/image'

import Arrow from '../../assets/Offers/arrow.svg'
import Line from '../../assets/Offers/line.svg'
import Envelop from '../../assets/Offers/Envelop.svg'
import User from '../../assets/Offers/user.svg'

export default function Offers() {
  return (
    <section className="w-full h-80 bg-linear-gradient-offers mt-[12.625rem] flex justify-center items-center">
      <h1 className="w-[28.688rem] font-bold text-[2.125rem] leading-[3rem] text-white">
        SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES EXCLUSIVAS!
      </h1>
      <div className="w-[10.75rem] h-[9.375rem] relative bg-red-500">
        <Image src={Line} alt="Line Image" className="absolute " />
        <Image
          src={Arrow}
          alt="Arrow Image"
          className="absolute bottom-0 right-0"
        />
      </div>

      <div>
        <span>Nos informe o seu e-mail e nome para o melhor atendimento!</span>
        <form>
          <div>
            <div>
              <Image src={Envelop} alt="Icon Envelop" />
              <input type="email" placeholder="maria@seuemail.com" />
            </div>
            <div>
              <Image src={User} alt="Icon User" />
              <input type="text" placeholder="Maria da Silva" />
            </div>
          </div>

          <div>
            <span>Tenho interesse na categoria:</span>
            <div>
              <label>
                <input type="radio" name="category" value="masculina" />
                <div className="custom-radio">
                  <div></div>
                </div>
                <span>Masculina</span>
              </label>
              <label>
                <input type="radio" name="category" value="feminina" />
                <div className="custom-radio">
                  <div></div>
                </div>
                <span>Feminina</span>
              </label>
            </div>
          </div>
          <button className="bg-linear-gradient-button uppercase">
            quero receber
          </button>
        </form>
      </div>
    </section>
  )
}
