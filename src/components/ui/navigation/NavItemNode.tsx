"use client"

import { motion, AnimatePresence } from "framer-motion"
import { NavItem } from "@/src/types/navigations"
import NavIconRenderer from "./NavIconRenderer"
import { useState } from "react"
import { cn } from "@/src/lib/utils"
import Link from "next/link"


const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    height: 0,
  },
  visible: {
    opacity: 1,
    y: -12,
    x: -1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    y: -15,
    height: 0,
    duration: 0.3,
  },
}
const NavItemNode = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = Boolean(item.children?.length)

  return (
    <motion.li
      className="list-none relative  w-32 h-full px-[15px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      whileHover={{ backgroundColor: "#4393d6", height: "120px", borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px" }}
      transition={{ duration: 0.5 }}
    >
      {item.href && !hasChildren ?
        <Link href={item.href}>
          <div className="flex flex-col items-center justify-center p-4 h-full">
            {item.icon && <NavIconRenderer icon={item.icon} />}
            <p className="font-medium">{item.label}</p>
          </div>
        </Link>
        : <div className="flex flex-col items-center justify-center p-4 h-full">
          {item.icon && <NavIconRenderer icon={item.icon} />}
          <p className="font-medium">{item.label}</p>
        </div>

      }

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-full left-0 bg-[#4393d6] p-5 overflow-hidden"
          >
            {item.children!.map((child) => (
              <NavItemNode key={child.label} item={child} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  )
}


export default NavItemNode
