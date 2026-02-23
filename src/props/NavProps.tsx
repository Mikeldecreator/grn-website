import { NavItem } from "../types/navigations";
import { AudioWave01Icon, HeadphonesIcon, UserGroupIcon } from "@hugeicons/core-free-icons"


export const HomeProps: NavItem[] = [
  {
    label: "About us",
    href: "/about"
  },
  {
    label: "Connect",
    href: "/connect",
    icon: {
      kind: "hugeicons",
      icon: UserGroupIcon,
      width: 30,
      height: 30
    }
  },
  {
    label: "Media",
    href: "/media",
    icon: {
      kind: "image",
      height: 50,
      width: 50,
      src: "/videoicon.png",
      alt: "Media image"
    },
    children: [
      {
        label: "Messages",
        href: "/media/audio-messages",
        icon: {
          icon: HeadphonesIcon,
          kind: "hugeicons",
          height: 30,
          width: 30
        }
      },
      {
        label: "Excerpts",
        href: "/media/audio-excerpts",
        icon: {
          icon: AudioWave01Icon,
          kind: "hugeicons",
          height: 30,
          width: 30
        }
      }
    ],
  },
  {
    label: "Give",
    href: "/href",
    icon: {
      kind: "image",
      src: "/giving.svg",
      width: 50,
      height: 50,
      alt: "Give"
    }
  }
]
