interface ButtonNumberShoeProps {
  number: number
  soldOut?: boolean
}

export default function ButtonNumbersShoe({
  number,
  soldOut,
}: ButtonNumberShoeProps) {
  return (
    <>
      {soldOut && (
        <button className="relative w-[2.938rem] h-[2.938rem] rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.875rem] text-black-400 opacity-60 border border-black-400 hover:bg-orange-500 hover:text-black-900 hover:opacity-100 hover:border-orange-500">
          <div className="w-[3.938rem] border border-black-400  absolute transform -rotate-45 origin-left-top bottom-[1.375rem] right-[-0.625rem]"></div>
          {number}
        </button>
      )}

      {!soldOut && (
        <button className="relative w-[2.938rem] h-[2.938rem] rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.875rem] text-black-400 opacity-60 border border-black-400 hover:bg-orange-500 hover:text-black-900 hover:opacity-100 hover:border-orange-500">
          {number}
        </button>
      )}
    </>
  )
}

// <button className="relative w-[2.938rem] h-[2.938rem] rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.875rem] text-black-400 opacity-60 border border-black-400 hover:bg-orange-500 hover:text-black-900 hover:opacity-100 hover:border-orange-500">
//     <div className="w-[3.938rem] border border-black-400  absolute transform -rotate-45 origin-left-top bottom-[1.375rem] right-[-0.625rem]"></div>
//    {number}
//  </button>
