'use client'

import Image from 'next/image'

import ItensMenu from './ItensMenu'

import { useContext } from 'react'
import { ShoeContext } from '@/context/shoeContext'

import Link from 'next/link'

import HeadPhone from '../../../public/Header/headphone.svg'
import Location from '../../../public/Header/location.svg'
import People from '../../../public/Header/people.svg'
import Heart from '../../../public/Header/heart.svg'
import Bag from '../../../public/Header/bag.svg'
import Logo from '../../../public/logo.png'

export default function Header() {
  const { shoesShoppingCart, shoesFavorites } = useContext(ShoeContext)

  return (
    <header className="h-60 w-screen flex flex-col items-center">
      <div className="h-[3.313rem] w-screen bg-linear-gradient flex justify-center items-center pl-3 pr-5">
        <div className="w-[82.75rem] flex justify-between items-center">
          <span className="text-sm text-white font-normal cursor-pointer">
            Loja de Calçados e Moda Online
          </span>
          <div className="flex items-center gap-14">
            <div className="flex gap-3 items-center cursor-pointer">
              <Image src={HeadPhone} alt="Icon HeadPhone" />
              <span className="text-sm text-white font-medium">
                Fale conosco
              </span>
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              <Image src={Location} alt="Icon Location" />
              <span className="text-sm text-white font-medium">
                {' '}
                Encontrar uma loja física
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center flex-wrap gap-11 pl-3 pr-5">
        <div className="w-[83.625rem] flex justify-between items-center ">
          <Image src={Logo} alt="Logo" width={297} height={86} />

          <nav className="flex items-center gap-10 h-14">
            <Link
              href={'/ShoesFavorites'}
              className="relative h-full flex items-center"
            >
              <ItensMenu description="Lista de Desejos" icon={Heart} />
              <div className="w-5 h-5 rounded-[1.25rem] text-xs leading-[1.05rem] text-white flex justify-center items-center bg-linear-gradient-button absolute top-1 left-[1.375rem]">
                {shoesFavorites.length}
              </div>
            </Link>
            <Link
              href={'/ShoppingCart'}
              className="relative h-full flex items-center"
            >
              <ItensMenu description="Sacola" icon={Bag} />
              <div className="w-5 h-5 rounded-[1.25rem] text-xs leading-[1.05rem] text-white flex justify-center items-center bg-linear-gradient-button absolute top-1 left-5">
                {shoesShoppingCart.length}
              </div>
            </Link>
            <ItensMenu description="Entrar" icon={People} />
          </nav>
        </div>
        <nav className="w-[81.5rem] flex justify-between items-center">
          <ul className="w-full flex justify-between">
            <li className="font-medium text-lg leading-6 text-black-400 hover:text-black-800 cursor-pointer">
              Novidades
            </li>
            <li className="font-medium text-lg leading-6 text-black-400 hover:text-black-800 cursor-pointer">
              Feminino
            </li>
            <li className="font-medium text-lg leading-6 text-black-400 hover:text-black-800 cursor-pointer">
              Masculino
            </li>
            <li className="font-medium text-lg leading-6 text-black-400 hover:text-black-800 cursor-pointer">
              Paquetá Sports
            </li>
            <li className="font-medium text-lg leading-6 text-black-400 hover:text-black-800 cursor-pointer">
              Outlet
            </li>
            <li className="font-medium text-lg leading-6 text-black-400 hover:text-black-800 cursor-pointer">
              Cashback
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
