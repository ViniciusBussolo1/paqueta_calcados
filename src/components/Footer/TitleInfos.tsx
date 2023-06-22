interface TitleInfosProps {
  title: string
}

export default function TitleInfos({ title }: TitleInfosProps) {
  return <h4 className="text-lg font-bold text-black-400">{title}</h4>
}
