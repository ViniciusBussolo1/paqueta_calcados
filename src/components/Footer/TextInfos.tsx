interface TextInfosProps {
  text: string
}

export default function TextInfos({ text }: TextInfosProps) {
  return (
    <span className="text-sm leading-[1.4rem] text-black-400 opacity-60">
      {text}
    </span>
  )
}
