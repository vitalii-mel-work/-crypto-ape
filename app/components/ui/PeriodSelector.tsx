'use client'

import { useAtom } from 'jotai'
import { periodAtom } from '@/app/store/cryptoStore'
import { PERIOD_LABELS, TimePeriod } from '@/app/lib/types'
import { FaClock, FaCalendarDay, FaCalendarAlt, FaChevronDown } from 'react-icons/fa'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PeriodSelector() {
  const [period, setPeriod] = useAtom(periodAtom)
  const [open, setOpen] = useState(false)

  const options = [
    { value: TimePeriod.DAY, label: PERIOD_LABELS[TimePeriod.DAY], icon: <FaClock size={16} /> },
    {
      value: TimePeriod.MONTH,
      label: PERIOD_LABELS[TimePeriod.MONTH],
      icon: <FaCalendarDay size={16} />,
    },
    {
      value: TimePeriod.YEAR,
      label: PERIOD_LABELS[TimePeriod.YEAR],
      icon: <FaCalendarAlt size={16} />,
    },
  ]
  const selected = options.find((o) => o.value === period)

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative mt-8 flex justify-center"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-72 items-center justify-between gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-black shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-400"
      >
        <div className="flex items-center gap-2">
          {selected?.icon}
          {selected?.label}
        </div>
        <FaChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border-2 border-gray-300 bg-white text-black shadow-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setPeriod(opt.value)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between gap-2 px-5 py-2.5 text-left transition-all ${
                period === opt.value
                  ? 'bg-blue-100 font-semibold text-blue-700'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                {opt.icon}
                {opt.label}
              </div>
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )
}
