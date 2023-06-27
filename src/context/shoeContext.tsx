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
  handleIdShoe: (id: string) => void
  shoesFavorites: Array<Array<dataShoesProps>>
}

interface ShoeContextProvidersProps {
  children: ReactNode
}

export const ShoeContext = createContext({} as ShoeContextDataProps)

export function ShoeContextProvider({ children }: ShoeContextProvidersProps) {
  const [shoesFavorites, setShoesFavorites] = useState<
    Array<Array<dataShoesProps>>
  >([])

  const handleIdShoe = async (id: string) => {
    const data = await api.get(`/shoe/${id}`)
    const resp = data.data
    setShoesFavorites([...shoesFavorites, resp])
  }

  return (
    <ShoeContext.Provider value={{ handleIdShoe, shoesFavorites }}>
      {children}
    </ShoeContext.Provider>
  )
}
