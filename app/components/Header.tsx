'use client'

import { motion } from 'framer-motion'
import { FaCoins } from 'react-icons/fa'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-center gap-2 py-6"
    >
      <FaCoins className="text-3xl text-yellow-400" />
      <h1 className="text-3xl font-bold text-yellow-400">Crypto Dashboard</h1>
    </motion.header>
  )
}
