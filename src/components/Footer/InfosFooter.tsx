import Image from 'next/image'

import TextInfos from './TextInfos'
import TitleInfos from './TitleInfos'

import American from '../../../public/Footer/IconsPayments/american.svg'
import Boleto from '../../../public/Footer/IconsPayments/boleto.svg'
import Elo from '../../../public/Footer/IconsPayments/elo.svg'
import Gaston from '../../../public/Footer/IconsPayments/gaston.svg'
import Hipercard from '../../../public/Footer/IconsPayments/hipercard.svg'
import Itau from '../../../public/Footer/IconsPayments/itau.svg'
import Mastercard from '../../../public/Footer/IconsPayments/mastercard.svg'
import Paqueta from '../../../public/Footer/IconsPayments/paqueta.svg'
import Visa from '../../../public/Footer/IconsPayments/visa.svg'

import Certification from '../../../public/Footer/Certifications/certification.svg'

import Instagram from '../../../public/Footer/Social/instagram.svg'
import Facebook from '../../../public/Footer/Social/facebook.svg'
import Twitter from '../../../public/Footer/Social/twitter.svg'
import Youtube from '../../../public/Footer/Social/youtube.svg'
import Pinterest from '../../../public/Footer/Social/pinterest.svg'

import Security from '../../../public/Footer/Security/security.svg'

export default function InfosFooter() {
  return (
    <div className="w-full h-[26.813rem] flex justify-center items-center">
      <div className="h-[70%] flex justify-between gap-10 ">
        <div className="flex flex-col justify-start gap-3">
          <TitleInfos title="Institucional" />
          <TextInfos text="Quem Somos" />
          <TextInfos text="Nossas Lojas" />
          <TextInfos text="Soluções Corporativas" />
          <TextInfos text="Política de Privacidade" />
          <TextInfos text="Contrato de Compra e Venda" />
          <TextInfos text="Crédito Pessoal" />
        </div>
        <div className="flex flex-col gap-3">
          <TitleInfos title="Ajuda e Suporte" />
          <TextInfos text="Troca e Devolução" />
          <TextInfos text="2ª Via do Boleto" />
          <TextInfos text="Detalhamento de Fatura" />
          <TextInfos text="Entregas" />
          <TextInfos text="Meus Pedidos" />
          <TextInfos text="Dúvidas Frequentes" />
          <TextInfos text="Status do Pedido" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <TitleInfos title="Atendimento" />
            <TextInfos text="Fale conosco" />
          </div>
          <div className="flex flex-col gap-3">
            <TitleInfos title="Endereço" />
            <span className="w-[17.625rem] text-sm leading-[1.4rem] text-black-400 opacity-60">
              Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ:
              01.098.983/0175-02
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <TitleInfos title="Trabalhe Conosco" />
            <TextInfos text="Venha crescer com a Paquetá!" />
          </div>
        </div>
        <div className="w-[32rem] h-[17.438rem] grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <TitleInfos title="Formas de Pagamentos" />
            <div className="w-[12.563rem] h-[7.813rem] grid grid-cols-3 gap-4 place-items-center">
              <Image src={Mastercard} alt="Icon Mastercard" />
              <Image src={American} alt="Icon American Express" />
              <Image src={Elo} alt="Icon Elo" />
              <Image src={Paqueta} alt="Icon Paqueta" />
              <Image src={Gaston} alt="Icon Gaston" />
              <Image src={Visa} alt="Icon Visa" />
              <Image src={Hipercard} alt="Icon Hipercard" />
              <Image src={Itau} alt="Icon Itau" />
              <Image src={Boleto} alt="Icon Boleto" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <TitleInfos title="Prêmios e Certificações" />
            <Image src={Certification} alt="Certification Image" />
          </div>
          <div className="flex flex-col gap-3">
            <TitleInfos title="Redes Sociais" />
            <div className="flex items-center gap-4">
              <Image src={Instagram} alt="icon Instagram" />
              <Image src={Facebook} alt="icon Facebook" />
              <Image src={Twitter} alt="icon Twitter" />
              <Image src={Youtube} alt="icon Youtube" />
              <Image src={Pinterest} alt="icon Pinterest" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <TitleInfos title="Segurança" />
            <Image src={Security} alt="Security Image" />
          </div>
        </div>
      </div>
    </div>
  )
}
