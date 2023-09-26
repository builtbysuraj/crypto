import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
)

export default function Chart({ array = [], currency, days }) {
  // const days = "24h"
  const prices = []
  const date = []

  for (let i = 0; i < array.length; i++) {
    if (days === "24h") date.push(new Date(array[i][0]).toLocaleTimeString())
    else date.push(new Date(array[i][0]).toLocaleDateString())
    prices.push(array[i][1])
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: `Prices in ${currency}`,
        data: prices,
        borderColor: "rgb(255,19,132)",
        backgroundColor: "rgba(255,19,132,0.5)",
      },
    ],
  }

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  )
}
