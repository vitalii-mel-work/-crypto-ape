'use client'

import { motion } from 'framer-motion'
import { FaBitcoin } from 'react-icons/fa'

export default function Preloader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-yellow-400">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <FaBitcoin size={80} />
      </motion.div>
      <motion.p
        className="mt-4 text-lg"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loadind...
      </motion.p>
    </div>
  )
}
