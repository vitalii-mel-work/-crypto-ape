'use client'

import { useQuery } from '@tanstack/react-query'
import { Coin, TimePeriod } from '../lib/types'
import { fetchMarketData, fetchLivePrice } from '../lib/api'

export function useMarketData(symbol: Coin, period: TimePeriod) {
  return useQuery({
    queryKey: ['market', symbol, period],
    queryFn: () => fetchMarketData(symbol, period),
    staleTime: 0,
  })
}

export function useLiveData(symbol: Coin) {
  return useQuery({
    queryKey: ['live', symbol],
    queryFn: () => fetchLivePrice(symbol),
    refetchInterval: 10000,
    staleTime: 0,
  })
}
