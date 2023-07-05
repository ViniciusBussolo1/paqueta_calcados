'use client'

import { useQuery } from '@tanstack/react-query'

import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import api from '@/services/api'

import ButtonNumbers from './ButtonNumbers'

import Logo from '../../../public/logo.png'
import HeartOrange from '../../../public/Outlet/heart-orange.svg'

import 'swiper/css/pagination'
import 'swiper/css'

interface dataShoesProps {
  id: string
  name: string
  price: {
    value: number
    discount: number
  }
  soldout: boolean
  image: string
  description: string
}

export default function Outlet() {
  const getShoes = async () => {
    return await api.get('/shoes')
  }

  const { data } = useQuery({
    queryKey: ['shoes'],
    queryFn: getShoes,
  })

  return (
    <section className="w-full pt-52 flex flex-col items-center justify-center px-4">
      <div className="w-[82.071rem] ">
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
      <div className="w-[82.071rem] mt-[4.625rem] flex justify-between ">
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
      <div className="w-[82.071rem] mt-[10.5rem] ">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-semibold text-[2.125rem] leading-[3rem] text-black-800 uppercase">
            Destaques
          </h2>
          <div className="relative group h-7">
            <span className="text-lg leading-[1.563rem] text-black-400 uppercase cursor-pointer hover:text-black-800 ">
              Conferir Tudo
            </span>
            <div className="absolute left-0 w-0 h-[0.063rem] bg-orange-600 transition-all group-hover:w-full"></div>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[30rem] mt-12"
        >
          {data?.data.map((shoe: dataShoesProps) => {
            return (
              <SwiperSlide key={shoe.id}>
                {shoe.soldout === true ? (
                  <>
                    <div className="w-full bg-orange-600 rounded-t-[0.188rem] flex justify-center items-center py-2">
                      <span className="text-sm font-bold text-white uppercase">
                        produto esgotado
                      </span>
                    </div>
                    <div className="w-[19.188rem] h-[25.75rem] px-6 pt-9 pb-6 flex flex-col items-center justify-end relative">
                      <Image
                        src={HeartOrange}
                        alt="Icon Heart"
                        className="absolute top-[11%] right-[10%] cursor-pointer"
                      />
                      <div>
                        <Image
                          src={shoe.image}
                          alt={shoe.name}
                          width={210}
                          height={149}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-3 mb-3">
                        <span className="font-medium text-base text-black-800">
                          {shoe.name}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-xl text-black-800">
                            R$ {shoe.price.value}
                          </span>
                          <span className="text-xs text-black-400 opacity-60 uppercase">
                            ou 10x de{' '}
                            {parseFloat((shoe.price.value / 9).toFixed(2))}
                          </span>
                        </div>
                      </div>

                      <button className="w-full bg-orange-600 font-semibold text-base uppercase text-white rounded-sm py-3 cursor-default">
                        me avise quando chegar
                      </button>
                    </div>
                  </>
                ) : (
                  <Link
                    href={`/${shoe.id}`}
                    className="w-[19.188rem] h-[28rem] px-6 pt-9 pb-6 flex flex-col items-center justify-end relative cursor-pointer"
                  >
                    <Image
                      src={HeartOrange}
                      alt="Icon Heart"
                      className="absolute top-[11%] right-[10%] cursor-pointer"
                    />
                    <div>
                      <Image
                        src={shoe.image}
                        alt={shoe.name}
                        width={210}
                        height={149}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-3 mb-3">
                      <span className="font-medium text-base text-black-800">
                        {shoe.name}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-xl text-black-800">
                          R$ {shoe.price.value}
                        </span>
                        <span className="text-xs text-black-400 opacity-60 uppercase">
                          ou 10x de{' '}
                          {parseFloat((shoe.price.value / 9).toFixed(2))}
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-linear-gradient-button font-bold text-lg uppercase text-white rounded-sm py-2 hover:opacity-60">
                      comprar
                    </button>
                  </Link>
                )}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
