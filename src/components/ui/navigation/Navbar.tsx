"use client"

import { manrope } from "@/src/lib/fonts"
import { NavItem } from "@/src/types/navigations"
import Image from "next/image"
import Link from "next/link"
import NavItemNode from "./NavItemNode"
import { motion } from "framer-motion"



const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <motion.header className="w-full h-20 z-50 fixed -top-0 left-0 backdrop-blur-md bg-black/10">
      <nav className="flex w-full h-full items-center border-b-slate-100/20" style={{ lineHeight: "198%" }}>
        <Link href="/" title="Go to homepage" className="pl-10 mr-auto">
          <div className="flex items-center gap-x-3">
            <Image src="/grn_logo.png" alt="grn logo" width={60} height={60} />
            <div className={`font-stretch-75% font-extrabold text-xl tracking-tight capitalize ${manrope.className}`}>
              <p className="mb-0">
                God&apos;s royal nation
              </p>
            </div>
          </div>
        </Link>
        <ul className="flex items-center gap-x-3 mx-auto">
          {
            navItems?.map((item, index: number) => <NavItemNode key={index} item={item} />)
          }

        </ul>
        <button className="ml-auto mr-5 bg-white px-4 py-3 rounded-full text-black text-sm font-semibold">
          Worship with us
        </button>
      </nav>
    </motion.header>
  )
}

export default Navbar




