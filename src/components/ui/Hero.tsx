"use client";

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import LatestSermon from "./LatestSermon";
import { useState } from "react";

// TODO: add framer motion and animate presence for carousel or alternatively create a carousel component
const Hero = () => {

  const [showLatestMessageBanner, setShowLatestMessageBanner] = useState(true)

  return (
    <section className="relative h-screen min-h-600px">
      <Image
        src="/demo.webp"
        alt="demo image"
        fill
        className="object-cover"
      />  <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-4/5 mx-auto space-y-5 h-full flex flex-col justify-center">
        <div className="z-50 text-8xl font-extrabold gap-y-3 overflow-hidden py-5 space-y-10">
          <motion.h1 className="">
            Royal by calling,
          </motion.h1>
          <motion.h1>
            Kingdom by nature.
          </motion.h1>
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

      <div className="absolute bottom-0">
        <AnimatePresence mode="wait">
          {
            showLatestMessageBanner &&
            <LatestSermon />
          }
        </AnimatePresence> </div>
    </section>
  )
}

export default Hero
