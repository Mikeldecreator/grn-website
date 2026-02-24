"use client";

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import LatestSermon from "./LatestSermon";
import { useEffect, useState } from "react";
import FlipText from "../flipText";

// TODO: add framer motion and animate presence for carousel or alternatively create a carousel component
const Hero = () => {

  const [showLatestMessageBanner, setShowLatestMessageBanner] = useState(true)


  useEffect(() => console.log(showLatestMessageBanner), [showLatestMessageBanner])

  return (
    <section className="relative h-screen min-h-600px">
      <Image
        src="/demo.webp"
        alt="demo image"
        fill
        className="object-cover"
      />  <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-4/5 mx-auto space-y-5 h-full flex flex-col justify-center">
        <div className="z-50 text-[86px] font-extrabold gap-y-3 overflow-hidden py-5 space-y-1">
          <div className="overflow-hidden">
            <motion.h1 className="" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              We are
            </motion.h1>
          </div>

          <FlipText />
        </div>
        <div className="flex items-center gap-x-5">
          <button className="bg-white text-black py-3 px-5 rounded-full w-fit font-semibold">
            Join Us
          </button>
          <button className="border rounded-full border-white py-3 px-5 font-extrabold">
            Grace Notes
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 z-50">
        <AnimatePresence mode="wait" key="showLatestMessageBanner">
          {
            showLatestMessageBanner &&
            <LatestSermon setVisible={setShowLatestMessageBanner} />
          }
        </AnimatePresence> </div>
    </section>
  )
}

export default Hero
