"use client"

import { motion } from 'framer-motion'

const LatestSermon = () => {
  return (
    <motion.div className="bg-purple-800/30 backdrop-blur-sm w-screen">
      <div>
        <h2 className="text-xl">
          Latest Message:
        </h2>
        <div>
          <div>
            22
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LatestSermon
