'use client'

import { Dispatch, SetStateAction } from 'react'

interface ButtonNumberShoeProps {
  number: number
  soldOut?: boolean
  numberSelected?: number
  setNumberSelected: Dispatch<SetStateAction<number>>
}

export default function ButtonNumbersShoe({
  number,
  soldOut,
  numberSelected,
  setNumberSelected,
}: ButtonNumberShoeProps) {
  const handleSelectButton = () => {
    setNumberSelected(number)
  }

  return (
    <>
      {soldOut && (
        <div className="relative flex justify-center items-center w-[2.938rem] h-[2.938rem] rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.875rem] text-black-400 opacity-60 border border-black-400 cursor-pointer">
          <div className="w-[3.938rem] border border-black-400  absolute transform -rotate-45 origin-left-top bottom-[1.375rem] right-[-0.625rem]"></div>
          {number}
        </div>
      )}

      {!soldOut && (
        <div
          className={
            numberSelected === number
              ? 'relative flex justify-center items-center w-[2.938rem] h-[2.938rem] rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.875rem] text-orange-400 opacity-60 border border-orange-400 cursor-pointer'
              : 'relative flex justify-center items-center w-[2.938rem] h-[2.938rem] rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.875rem] text-black-400 opacity-60 border border-black-400 cursor-pointer'
          }
          onClick={handleSelectButton}
        >
          {number}
        </div>
      )}
    </>
  )
}
