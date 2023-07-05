import SizeGuide from './SizeGuide'

import FootSize from '../../../public/Shoe/ComponentModal/FootSize.svg'
import Image from 'next/image'

export default function ComponetModal() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[1.875rem] leading-[2.625rem] text-orange-500 uppercase font-bold">
          Guia de Tamanhos
        </h1>
        <div className="flex justify-between">
          <span className="w-[14.75rem] text-2xl leading-7 font-semibold text-black-400 uppercase text-center">
            Número do calçado
          </span>
          <span className="w-[12.5rem] text-2xl leading-7 font-semibold text-black-400 uppercase text-center">
            Comprimeto do Pé
          </span>
        </div>
      </div>
      <div className="my-12 flex gap-20">
        <div className="flex flex-col gap-20 items-center">
          <div className="w-[24.375rem] flex flex-col gap-6">
            <SizeGuide
              number={1}
              text="Fique de pé em cima de uma folha de papel."
            />
            <SizeGuide
              number={2}
              text="Faça um risco no seu calcanhar e outro na frente do seu dedão."
            />
            <SizeGuide
              number={3}
              text="Agora é só medir o comprimento entre essas duas linhas e pronto!"
            />
          </div>
          <Image src={FootSize} alt="Foot Size Image" />
        </div>
        <div className="w-[25.75rem] flex justify-between gap-4">
          <div className="w-[8.125rem] flex flex-col items-center gap-5">
            <span className="text-lg font-bold text-black-400">33</span>
            <span className="text-lg font-bold text-black-400">34</span>
            <span className="text-lg font-bold text-black-400">35</span>
            <span className="text-lg font-bold text-black-400">36</span>
            <span className="text-lg font-bold text-black-400">37</span>
            <span className="text-lg font-bold text-black-400">38</span>
            <span className="text-lg font-bold text-black-400">39</span>
            <span className="text-lg font-bold text-black-400">40</span>
            <span className="text-lg font-bold text-black-400">41</span>
            <span className="text-lg font-bold text-black-400">42</span>
            <span className="text-lg font-bold text-black-400">43</span>
            <span className="text-lg font-bold text-black-400">44</span>
          </div>
          <div className="w-[200px] flex flex-col items-center gap-5">
            <span className="text-xl font-medium text-black-400">
              21,6 - 22,2 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              22,3 - 22,9 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              23,0 - 23,6 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              23,7 - 24,2 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              24,3 - 24,8 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              24,9 - 25,5 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              25,6 - 26,2 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              26,3 - 26,8 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              26,9 - 27,5 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              27,6 - 28,2 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              28,3 - 28,7 cm
            </span>
            <span className="text-xl font-medium text-black-400">
              28,8 - 29,4 cm
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
