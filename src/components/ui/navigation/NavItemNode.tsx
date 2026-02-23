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
        <div className="flex gap-x-3  items-center justify-center h-30">
          <p className="font-semibold capitalize">{item.label}</p>
        </div>
      </motion.li>

    )
  }
  return (
    <motion.li onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="list-none font-semibold space-x-3 flex items-center gap-x-3 capitalize">
      {item.label}
    </motion.li>
  )
}

export default NavItemNode
