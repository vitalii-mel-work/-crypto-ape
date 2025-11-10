'use client'

import { atom } from 'jotai'
import { Coin, TimePeriod } from '../lib/types'

export const coinAtom = atom<Coin>(Coin.BITCOIN)
export const periodAtom = atom<TimePeriod>(TimePeriod.DAY)
