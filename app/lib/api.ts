import { Coin, PricePoint, TimePeriod } from './types'

const API = 'https://api.coingecko.com/api/v3'

export async function fetchMarketData(symbol: Coin, period: TimePeriod): Promise<PricePoint[]> {
  const res = await fetch(`${API}/coins/${symbol}/market_chart?vs_currency=usd&days=${period}`)
  if (!res.ok) throw new Error('Failed to fetch market data')
  const data = await res.json()
  return data.prices.map((p: [number, number]) => ({
    time: new Date(p[0]).toLocaleDateString(),
    value: p[1],
  }))
}

export async function fetchLivePrice(symbol: Coin) {
  const res = await fetch(`${API}/simple/price?ids=${symbol}&vs_currencies=usd`)
  if (!res.ok) throw new Error('Failed to fetch live price')
  return res.json()
}
