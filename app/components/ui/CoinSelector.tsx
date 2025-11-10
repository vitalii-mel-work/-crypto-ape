'use client'

import { useAtom } from 'jotai'
import { coinAtom } from '@/app/store/cryptoStore'
import { Coin } from '@/app/lib/types'
import { FaBitcoin, FaDollarSign } from 'react-icons/fa'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function CoinSelector() {
  const [coin, setCoin] = useAtom(coinAtom)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-8 flex justify-center gap-6"
    >
      <button
        onClick={() => setCoin(Coin.BITCOIN)}
        className={clsx(
          'flex items-center gap-2 rounded-xl border-2 px-8 py-3 text-sm font-semibold shadow-sm transition-all duration-200',
          coin === Coin.BITCOIN
            ? 'border-yellow-400 bg-yellow-400 text-black'
            : 'border-white text-white hover:bg-white/10',
        )}
      >
        <FaBitcoin className="h-5 w-5" />
        Bitcoin
      </button>

      <button
        onClick={() => setCoin(Coin.SOLANA)}
        className={clsx(
          'flex items-center gap-2 rounded-xl border-2 px-8 py-3 text-sm font-semibold shadow-sm transition-all duration-200',
          coin === Coin.SOLANA
            ? 'border-emerald-400 bg-emerald-400 text-black'
            : 'border-white text-white hover:bg-white/10',
        )}
      >
        <FaDollarSign className="h-5 w-5" />
        Solana
      </button>
    </motion.div>
  )
}
