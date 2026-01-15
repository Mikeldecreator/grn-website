"use client"

import { motion, AnimatePresence } from "framer-motion"
import { NavItem } from "@/src/types/navigations"
import NavIconRenderer from "./NavIconRenderer"
import { useState } from "react"

const NavItemNode = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasChildren = item.children ? true : false

  if (!hasChildren) {
    return (
      <motion.li className="list-none w-32">
        <div className="flex flex-col items-center justify-center h-30">
          {item.icon && <NavIconRenderer icon={item.icon} />}
          <p className="font-medium">{item.label}</p>
        </div>
      </motion.li>

    )
  }
  return (
    <motion.li onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="list-none">
      <div>
        {item.icon && <NavIconRenderer icon={item.icon} />}
        <p className="font-medium">{item.label}</p>
      </div>
      <AnimatePresence initial={false}>
        {
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", width: "500px", opacity: 1 }} transition={{
            duration: 0.5,
            ease: "easeInOut"
          }} exit={{ height: 0, opacity: 0 }} className="bg-red-400">
            {isOpen && item.children!.map((child, index: number) => <NavItemNode key={index} item={child} />)}</motion.ul>}
      </AnimatePresence>
    </motion.li>
  )
}

export default NavItemNode
