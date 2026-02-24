"use client"

import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'


interface LatestSermonProps {
  setVisible: Dispatch<SetStateAction<boolean>>
}

const LatestSermon = ({ setVisible }: LatestSermonProps) => {
  return (
    <motion.div className="bg-white/30 flex items-center justify-center p-4! backdrop-blur-sm w-screen" initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, ease: "backInOut", duration: 2 }}>
      <div className="w-4/5 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div className="text-xl font-extrabold">
            <h3>
              Latest
            </h3>
            <h3>Message:</h3>
          </div>
          <div className="mx-auto">
            <div className='bg-blue-500 py-0.5 px-4 rounded-t-sm'>
              <p className="font-extrabold">22</p>
            </div>
            <div className="bg-white text-black text-center py-1.5 rounded-b-sm">
              <p className="text-sm font-medium">Feb</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-5 text-black z-50">
          <button className="capitalize rounded-full bg-white py-2 px-5 font-medium">
            Download
          </button>
          <button className="capitalize rounded-full bg-white py-2 px-5 font-medium">
            Listen online
          </button>
          <button className="hover:bg-white/30 hover:backdrop-blur-md px-4 py-2 rounded-full" onClick={() => setVisible(false)}>
            x
          </button>
        </div>

      </div>
    </motion.div>
  )
}

export default LatestSermon
