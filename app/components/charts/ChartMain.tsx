'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { PricePoint } from '@/app/lib/types'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler)

interface ChartProps {
  data: PricePoint[]
  color: string
  label: string
  period?: string
}

export default function ChartMain({ data, color, label, period }: ChartProps) {
  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label,
        data: data.map((d) => d.value),
        borderColor: color,
        backgroundColor: `${color}33`,
        fill: true,
        tension: 0.25,
        pointRadius: 0,
      },
    ],
  }

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: '#9ca3af',
          callback: function (val: unknown, index: number) {
            const label = data[index]?.time
            if (!label) return ''
            if (period === '7d') return label.split(' ')[0]
            if (period === '30d') return label.split(' ')[0]
            if (period === '365d') return label.split(' ')[0]
            return label
          },
        },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#9ca3af' },
        grid: { color: '#1e293b' },
      },
    },
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  }

  return <Line data={chartData} options={chartOptions} />
}
