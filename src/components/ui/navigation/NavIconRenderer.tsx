import { NavIcon } from "@/src/types/navigations"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from 'next/image'

const NavIconRenderer = ({ icon }: { icon: NavIcon }) => {

  if (icon.kind === "hugeicons") {
    return <HugeiconsIcon icon={icon.icon} width={icon.width} height={icon.height} />
  }

  if (icon.kind === "image") {
    return <Image src={icon.src} width={icon.width} alt={icon.alt} height={icon.height} fill={icon.fill} />
  }

  const Icon = icon.icon
  return (
    <Icon width={icon.width} height={icon.height} />
  )
}

export default NavIconRenderer
