'use client'

import api from '@/services/api'
import { ReactNode, createContext, useState } from 'react'
import { toast } from 'react-toastify'

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
  handleShoesShoppingCart: (id: string, number: number) => void
  handleShoesFavorites: (id: string, number: number) => void
  shoesShoppingCart: Array<Array<dataShoesProps>>
  shoesFavorites: Array<Array<dataShoesProps>>
}

interface ShoeContextProvidersProps {
  children: ReactNode
}

export const ShoeContext = createContext({} as ShoeContextDataProps)

export function ShoeContextProvider({ children }: ShoeContextProvidersProps) {
  const [shoesShoppingCart, setShoesShoppingCart] = useState<
    Array<Array<dataShoesProps>>
  >([])

  const [shoesFavorites, setShoesFavorites] = useState<
    Array<Array<dataShoesProps>>
  >([])

  const handleShoesShoppingCart = async (id: string, number: number) => {
    if (number === 0) {
      toast.warn('Escolha uma numeração', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      const data = await api.get(`/shoe/${id}`)
      const resp = data.data
      setShoesShoppingCart([...shoesShoppingCart, resp])

      toast.success('Produto Inserido na Sacola', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  const handleShoesFavorites = async (id: string, number: number) => {
    if (number === 0) {
      toast.warn('Escolha uma numeração', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      const data = await api.get(`/shoe/${id}`)
      const resp = data.data
      setShoesFavorites([...shoesFavorites, resp])
      toast.success('Produto Inserido na Lista de Desejos', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }

  return (
    <ShoeContext.Provider
      value={{
        shoesShoppingCart,
        shoesFavorites,
        handleShoesShoppingCart,
        handleShoesFavorites,
      }}
    >
      {children}
    </ShoeContext.Provider>
  )
}
