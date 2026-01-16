import { manrope } from "@/src/lib/fonts"
import { NavItem } from "@/src/types/navigations"
import Image from "next/image"
import Link from "next/link"
import NavItemNode from "./NavItemNode"



const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <header className="w-full h-24 z-50 sticky top-0 bg-black/30 backdrop-blur-xs">
      <nav className="flex w-full h-full items-center border-b justify-between border-b-slate-100/20" style={{ lineHeight: "198%" }}>
        <Link href="/" title="Go to homepage" className="pl-10">
          <div className="flex items-center gap-x-3">
            <Image src="/grn_logo.png" alt="grn logo" width={60} height={60} />
            <div className={`font-stretch-75% font-extrabold text-2xl tracking-tight uppercase ${manrope.className}`}>
              <p className="mb-0">
                God&apos;s royal
              </p>
              <p className="mt-0 font-extralight text-lg tracking-widest">Nation</p>
            </div>
          </div>
        </Link>
        <ul className="flex items-center h-full [&>li]:border-x [&>li]:w-36 [&>li]:border-x-gray-50/30">
          {
            navItems?.map((item, index: number) => <NavItemNode key={index} item={item} />)
          }
          <li className="bg-white w-28! justify-center flex-col text-black h-full flex items-center">
            <Image src="/ellipsis.svg" className="rotate-90" alt="More options" width={32} height={32} />
            <p>Menu</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar




