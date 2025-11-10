'use client'

import { Line } from 'react-chartjs-2'
import { PricePoint } from '@/app/lib/types'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function ChartLive({ data, color }: { data: PricePoint[]; color: string }) {
  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        data: data.map((d) => d.value),
        borderColor: color,
        borderWidth: 1.5,
        pointRadius: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  }

  return <Line data={chartData} options={options} />
}
