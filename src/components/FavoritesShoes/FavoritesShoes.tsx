'use client'

import { ShoeContext } from '@/context/shoeContext'
import { useContext } from 'react'

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

export default function Favorites() {
  const { shoesFavorites } = useContext(ShoeContext)

  return <div></div>
}
