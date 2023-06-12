import Image from 'next/image'

interface MenuHeaderProps {
  icon: string
  description: string
}

export default function MenuHeader({ icon, description }: MenuHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt="Icon Heart" />
      <span className="text-sm text-black-400 font-normal cursor-pointer">
        {description}
      </span>
    </div>
  )
}
