export enum Coin {
  BITCOIN = 'bitcoin',
  SOLANA = 'solana',
}

export enum TimePeriod {
  DAY = '7d',
  MONTH = '30d',
  YEAR = '365d',
}

export interface PricePoint {
  time: string
  value: number
}

export const PERIOD_LABELS: Record<TimePeriod, string> = {
  [TimePeriod.DAY]: '7 Days',
  [TimePeriod.MONTH]: 'Month',
  [TimePeriod.YEAR]: 'Year',
}
