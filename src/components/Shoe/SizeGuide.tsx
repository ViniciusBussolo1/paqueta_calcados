interface SizeGuideProps {
  number: number
  text: string
}

export default function SizeGuide({ number, text }: SizeGuideProps) {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="w-6 h-6 text-base leading-[1.575rem] font-bold text-white flex justify-center items-center bg-linear-gradient-button rounded-[1.25rem]">
        {number}
      </div>
      <span className="w-[21.25rem] text-lg leading-[1.5rem] text-black-400">
        {text}
      </span>
    </div>
  )
}
