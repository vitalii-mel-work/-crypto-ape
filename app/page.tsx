'use client'

import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { coinAtom, periodAtom } from './store/cryptoStore'
import { useMarketData } from './hooks/useCrypto'
import { COIN_COLORS, COIN_LABELS } from './lib/constants'
import { PERIOD_LABELS } from './lib/types'
import Preloader from './components/Preloader'
import Header from './components/Header'
import CoinSelector from './components/ui/CoinSelector'
import PeriodSelector from './components/ui/PeriodSelector'
import ChartMain from './components/charts/ChartMain'

export default function Page() {
  const [coin] = useAtom(coinAtom)
  const [period] = useAtom(periodAtom)
  const { data: marketData, isLoading, isFetching } = useMarketData(coin, period)
  const color = COIN_COLORS[coin]

  if (isLoading || !marketData) return <Preloader />

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-6 py-10 text-white">
      {isFetching && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-4 top-4 text-sm text-yellow-400"
        >
          Loading ...
        </motion.div>
      )}

      <Header />
      <CoinSelector />
      <PeriodSelector />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 w-full max-w-6xl"
      >
        <h2 className="mb-6 text-center text-xl font-semibold text-yellow-400">
          {COIN_LABELS[coin]} History ({PERIOD_LABELS[period]})
        </h2>
        <div className="h-[500px] w-full">
          <ChartMain data={marketData} color={color} label={`${COIN_LABELS[coin]} / USD`} />
        </div>
      </motion.section>
    </main>
  )
}
