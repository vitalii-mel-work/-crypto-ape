import { Coin } from './types'

export const COIN_LABELS: Record<Coin, string> = {
  [Coin.BITCOIN]: 'Bitcoin',
  [Coin.SOLANA]: 'Solana',
}

export const COIN_COLORS: Record<Coin, string> = {
  [Coin.BITCOIN]: '#f2b705',
  [Coin.SOLANA]: '#14f195',
}
