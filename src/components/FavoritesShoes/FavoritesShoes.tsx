'use client'

import { useContext } from 'react'

import { ChevronRight } from 'lucide-react'
import { ShoeContext } from '@/context/shoeContext'

import Image from 'next/image'

import Trash from '.../../../public/ShoppingCart/trash.svg'

export default function FavoritesShoes() {
  const { shoesFavorites } = useContext(ShoeContext)

  return (
    <div className="w-screen h-screen flex justify-center pt-[4.25rem]">
      <div className="w-[82.125rem] flex flex-col items-start gap-[4.875rem]">
        <div className="flex flex-col items-start gap-[4.25rem]">
          <div className="flex items-center gap-2">
            <span className="text-lg leading-[1.575rem] text-black-400 opacity-60">
              Paquetá
            </span>
            <span>
              <ChevronRight size={16} className="opacity-60" />{' '}
            </span>
            <div>
              <span className="text-lg leading-[1.575rem] font-medium text-black-400">
                Lista de Desejos
              </span>{' '}
              <div className="h-[0.063rem] w-full bg-orange-500"></div>
            </div>
          </div>
          <h1 className="text-[2.125rem] leading-[2.975rem] font-bold text-black-800">
            Lista de Desejos
          </h1>
        </div>
        <div className="w-full flex gap-4">
          <div className="w-[7rem] flex flex-col items-end">
            <div className="text-[1.625rem] leading-[2.275rem] font-semibold text-black-800">
              Itens
            </div>
            <div className="h-[0.063rem] w-full bg-orange-500"></div>
          </div>
          <div className="w-[71.813rem] flex flex-col gap-16">
            {shoesFavorites.map((data, index) => {
              return (
                <>
                  <div key={index} className="w-full flex justify-between">
                    {data.map((shoe) => {
                      return (
                        <>
                          <div className="flex gap-16">
                            <Image
                              src={shoe.image}
                              alt="Image Shoe"
                              width={200}
                              height={160}
                            />
                            <div className="flex flex-col gap-5">
                              <div>
                                <h2 className="text-[1.875rem] leading-[1.875rem] font-bold text-black-800">
                                  {shoe.name}
                                </h2>
                                <span className="text-lg leading-[1.575rem] text-black-400">
                                  Código do produto:{' '}
                                  <span>365087-2001102972</span>
                                </span>
                              </div>
                              <div className="flex flex-col gap-3">
                                <span className="text-xl font-bold">
                                  Numeração:{' '}
                                  <span className="text-black-400 font-normal">
                                    39
                                  </span>
                                </span>
                                <span className="text-xl font-bold">
                                  Cor:{' '}
                                  <span className="text-black-400 font-normal">
                                    Preto
                                  </span>
                                </span>
                                <span className="text-xl font-bold">
                                  Quantidade:{' '}
                                  <span className="text-black-400 font-normal">
                                    1
                                  </span>
                                </span>
                                <span className="text-xl font-bold">
                                  Preço:{' '}
                                  <span className="text-black-400 font-normal">
                                    R$ {shoe.price.value}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="w-44 h-11 flex items-center gap-2 cursor-pointer">
                            <Image src={Trash} alt="Icon Trash" />
                            <span className="text-lg leading-[1.575rem] font-medium text-black-400">
                              Remover
                            </span>
                          </div>
                        </>
                      )
                    })}
                  </div>
                  <div className="h-[1px] w-full bg-orange-500"></div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
