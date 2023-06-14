interface ButtonNumberProps {
  number: number
}

export default function ButtonNumbers({ number }: ButtonNumberProps) {
  return (
    <button className="w-16 h-16 rounded-[0.188rem] font-medium text-[1.375rem] leading-[1.938rem] text-black-400 opacity-70 border border-black-400">
      {number}
    </button>
  )
}
