'use client'

import { useContext, useState } from 'react'
import { useQueries } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

import { ShoeContext } from '@/context/shoeContext'

import Link from 'next/link'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination } from 'swiper'

import { ChevronRight } from 'lucide-react'

import Image from 'next/image'

import Instagram from '../../assets/PageShoe/Social/instagram.svg'
import Facebook from '../../assets/PageShoe/Social/facebook.svg'
import Twitter from '../../assets/PageShoe/Social/twitter.svg'
import Youtube from '../../assets/PageShoe/Social/youtube.svg'
import Pinterest from '../../assets/PageShoe/Social/pinterest.svg'

import HeartOrange from '../../assets/Outlet/heart-orange.svg'

import Heart from '../../assets/PageShoe/heart.svg'
import HeartFull from '../../assets/PageShoe/heartFull.svg'
import ButtonNumbersShoe from './ButtonNumbersShoe'

import api from '@/services/api'

import 'react-toastify/dist/ReactToastify.css'

interface ShoeProps {
  params: {
    id: string
  }
}
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

export default function Shoe({ params }: ShoeProps) {
  const [divSelected, setDivSelected] = useState<number | null>(null)
  const [Favorite, setFavorite] = useState(false)

  const { handleShoesShoppingCart, handleShoesFavorites } =
    useContext(ShoeContext)

  const handleFavoriteShoe = (id: string) => {
    setFavorite(true)

    handleShoesFavorites(id)
  }

  const getShoes = async () => {
    return await api.get('/shoes')
  }

  const getShoe = async () => {
    return await api.get(`/shoe/${params.id}`)
  }

  const [shoesQuery, shoeQuery] = useQueries({
    queries: [
      {
        queryKey: ['shoes'],
        queryFn: getShoes,
      },

      {
        queryKey: ['shoe'],
        queryFn: getShoe,
      },
    ],
  })

  return (
    <div className="w-screen h-screen flex flex-col items-center pt-[4.375rem]">
      <ToastContainer />
      <div className="flex gap-5">
        {shoeQuery.data?.data.map((shoe: dataShoesProps) => {
          return (
            <>
              <div
                className="h-[52.25rem] w-[52.25rem] flex flex-col gap-6"
                key={shoe.id}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg leading-[1.575rem] text-black-400 opacity-60">
                    Paquetá
                  </span>
                  <span>
                    <ChevronRight size={16} className="opacity-60" />{' '}
                  </span>
                  <div>
                    <span className="text-lg leading-[1.575rem] font-medium text-black-400">
                      {shoe.name}
                    </span>{' '}
                    <div className="h-[0.063rem] w-full bg-orange-500"></div>
                  </div>
                </div>
                <Image
                  src={shoe.image}
                  alt="Shoe Image"
                  width={640}
                  height={600}
                />
                <div className="flex flex-col gap-3">
                  <span>Compartilhe</span>
                  <div className="flex items-center gap-3">
                    <Image
                      src={Instagram}
                      width={24}
                      height={24}
                      alt="Icons Instagram"
                      className="cursor-pointer"
                    />
                    <Image
                      src={Facebook}
                      width={14}
                      height={25}
                      alt="Icons Facebook"
                      className="cursor-pointer"
                    />
                    <Image
                      src={Twitter}
                      width={28}
                      height={23}
                      alt="Icons Twitter"
                      className="cursor-pointer"
                    />
                    <Image
                      src={Youtube}
                      width={29}
                      height={20}
                      alt="Icons Youtube"
                      className="cursor-pointer"
                    />
                    <Image
                      src={Pinterest}
                      width={22}
                      height={25}
                      alt="Icons Pinterest"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="h-[52.25rem] w-[33.625rem] flex flex-col gap-16 pt-14">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-3">
                    {Favorite === true ? (
                      <Image
                        src={HeartFull}
                        alt="Icon Heart"
                        className="cursor-pointer"
                      />
                    ) : (
                      <Image
                        src={Heart}
                        alt="Icon Heart"
                        className="cursor-pointer"
                        onClick={() => handleFavoriteShoe(shoe.id)}
                      />
                    )}

                    <h2 className="text-[2.5rem] leading-[3.125rem] font-semibold text-black-800">
                      {shoe.name}
                    </h2>
                  </div>
                  <span className="text-lg leading-[1.575rem] text-black-400 opacity-80">
                    Código do produto: 365087-2001152093
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-6">
                    {shoe.price.discount === 0 ? (
                      <div></div>
                    ) : (
                      <>
                        <span className="text-[1.375rem] leading-[1.925rem] text-black-400 opacity-80 line-through">
                          R${shoe.price.value}
                        </span>
                        <div className="w-[10.688rem] h-[1.313rem] bg-green-500 flex justify-center items-center rounded">
                          <span className="text-sm leading-[1.4rem] font-semibold text-white">
                            {shoe.price.discount * 100}% DE DESCONTO
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[2.5rem] leading-[3.5rem] font-bold text-black-800">
                      R${' '}
                      {(
                        shoe.price.value -
                        shoe.price.value * ((shoe.price.discount * 100) / 100)
                      ).toFixed(2)}
                    </span>
                    <span className="text-xl font-medium text-black-400 opacity-60">
                      ou 9x R${' '}
                      {(
                        (shoe.price.value -
                          shoe.price.value *
                            ((shoe.price.discount * 100) / 100)) /
                        9
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="text-lg leading-[1.575rem] text-black-400 opacity-80">
                    Escolha a numeração:
                  </span>
                  <div className="flex gap-[2.169rem]">
                    <ButtonNumbersShoe
                      number={34}
                      soldOut={true}
                      setDivSelected={setDivSelected}
                    />
                    <ButtonNumbersShoe
                      number={35}
                      divSelected={divSelected}
                      setDivSelected={setDivSelected}
                    />
                    <ButtonNumbersShoe
                      number={36}
                      soldOut={true}
                      setDivSelected={setDivSelected}
                    />
                    <ButtonNumbersShoe
                      number={37}
                      divSelected={divSelected}
                      setDivSelected={setDivSelected}
                    />
                    <ButtonNumbersShoe
                      number={38}
                      divSelected={divSelected}
                      setDivSelected={setDivSelected}
                    />
                    <ButtonNumbersShoe
                      number={39}
                      divSelected={divSelected}
                      setDivSelected={setDivSelected}
                    />
                    <ButtonNumbersShoe
                      number={40}
                      divSelected={divSelected}
                      setDivSelected={setDivSelected}
                    />
                  </div>
                  <span className="text-base leading-[1.4rem] font-bold text-black-400 opacity-60 mt-3 cursor-pointer">
                    Guia de tamanhos
                  </span>
                </div>

                <button
                  className="text-[2.1rem] leading-[110%] uppercase text-white bg-linear-gradient-button py-3 px-4 rounded"
                  onClick={() => handleShoesShoppingCart(shoe.id)}
                >
                  Comprar
                </button>
              </div>
            </>
          )
        })}
      </div>
      <div className="w-[89.063rem] flex flex-col gap-4 mt-11">
        {shoeQuery.data?.data.map((shoe: dataShoesProps) => {
          return (
            <>
              <h1
                className="text-[2.5rem] leading-[3.5rem] font-semibold text-black-800 uppercase"
                key={shoe.id}
              >
                Descrição do Produto
              </h1>
              <p className="text-[1.375rem] leading-10 font-light text-black-400">
                {shoe.description}
              </p>
            </>
          )
        })}
      </div>
      <div className="w-[89.063rem] mt-[13.188rem] ">
        <h1 className="text-[2.125rem] leading-[2.975rem] font-bold text-black-800">
          TALVEZ POSSA LHE INTERESSAR
        </h1>
      </div>

      <div className="w-[89.063rem] mt-8">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="h-[30rem]"
        >
          {shoesQuery?.data?.data.map((shoes: dataShoesProps) => {
            return (
              <>
                {shoes.soldout === false ? (
                  <SwiperSlide key={shoes.id}>
                    <Link
                      href={`/${shoes.id}`}
                      className="w-[19.188rem] h-[28rem] px-6 pt-9 pb-6 flex flex-col items-center justify-end relative cursor-pointer"
                    >
                      <Image
                        src={HeartOrange}
                        alt="Icon Heart"
                        className="absolute top-[11%] right-[10%] cursor-pointer"
                      />
                      <div>
                        <Image
                          src={shoes.image}
                          alt={shoes.name}
                          width={210}
                          height={149}
                        />
                      </div>
                      <div className="w-full flex flex-col gap-3 mb-3">
                        <span className="font-medium text-base text-black-800">
                          {shoes.name}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-xl text-black-800">
                            R$ {shoes.price.value}
                          </span>
                          <span className="text-xs text-black-400 opacity-60 uppercase">
                            ou 10x de{' '}
                            {parseFloat((shoes.price.value / 9).toFixed(2))}
                          </span>
                        </div>
                      </div>

                      <button className="w-full bg-linear-gradient-button font-bold text-lg uppercase text-white rounded-sm py-2 hover:opacity-60">
                        comprar
                      </button>
                    </Link>
                  </SwiperSlide>
                ) : (
                  <span key={shoes.id}></span>
                )}
              </>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
