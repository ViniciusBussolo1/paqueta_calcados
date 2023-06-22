import TextInfos from './TextInfos'
import TitleInfos from './TitleInfos'

export default function InfosFooter() {
  return (
    <div className="w-full h-[26.813rem] flex justify-center items-center">
      <div className="h-[70%] flex gap-10 ">
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
          <div className="flex flex-col">
            <TitleInfos title="Atendimento" />
            <TextInfos text="Fale conosco" />
          </div>
          <div className="flex flex-col">
            <TitleInfos title="Endereço" />
            <span className="w-[17.625rem] text-sm leading-[1.4rem] text-black-400 opacity-60">
              Rua Antonio Frederico Ozanan, 2601 Canoas - RS | CNPJ:
              01.098.983/0175-02
            </span>
          </div>
          <div className="flex flex-col">
            <TitleInfos title="Trabalhe Conosco" />
            <TextInfos text="Venha crescer com a Paquetá!" />
          </div>
        </div>
        <div>
          <div>
            <TitleInfos title="Formas de Pagamentos" />
          </div>
          <div>
            <TitleInfos title="Prêmios e Certificações" />
          </div>
          <div>
            <TitleInfos title="Redes Sociais" />
          </div>
          <div>
            <TitleInfos title="Segurança" />
          </div>
        </div>
      </div>
    </div>
  )
}
