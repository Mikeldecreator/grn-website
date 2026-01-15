"use client";

import { AnimatePresence, motion } from "framer-motion";
import { JSX } from "react";
import { goForward, goBackward } from "@/src/lib/carouselControls";


interface CarouselProps {
  images: string[];
  title?: string;
  description?: string;
  alignment: "left" | "right" | "center";
  showIndicators: boolean
  showControls: boolean
}

const Carousel = ({ images, title, description, alignment, showIndicators = false, showControls = false }: CarouselProps): JSX.Element => {

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Carousel content goes here */}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Carousel
