'use client'

import api from '@/services/api'
import { ReactNode, createContext, useState } from 'react'

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

interface ShoeContextDataProps {
  handleShoesShoppingCart: (id: string) => void
  shoesShoppingCart: Array<Array<dataShoesProps>>
}

interface ShoeContextProvidersProps {
  children: ReactNode
}

export const ShoeContext = createContext({} as ShoeContextDataProps)

export function ShoeContextProvider({ children }: ShoeContextProvidersProps) {
  const [shoesShoppingCart, setShoesShoppingCart] = useState<
    Array<Array<dataShoesProps>>
  >([])

  const handleShoesShoppingCart = async (id: string) => {
    const data = await api.get(`/shoe/${id}`)
    const resp = data.data
    setShoesShoppingCart([...shoesShoppingCart, resp])
  }

  return (
    <ShoeContext.Provider
      value={{ shoesShoppingCart, handleShoesShoppingCart }}
    >
      {children}
    </ShoeContext.Provider>
  )
}
