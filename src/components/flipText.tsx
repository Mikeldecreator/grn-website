"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";


const texts = ["Royal by calling", "Kingdom by nature", "Blessed to be a blessing", "God's royal nation"]

const FlipText = () => {
  const [activeText, setActiveText] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => {
        if (prev >= texts.length - 1) return prev
        return (prev + 1) % texts.length;
      })
    }, 5000)


    return () => clearInterval(interval)
  }, [setActiveText])

  return (
    <motion.div key={activeText} initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }} className="overflow-hidden text-[86px] font-extrabold py-4 capitalize">{texts[activeText]}.</motion.div>
  )
}

export default FlipText
