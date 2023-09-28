import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import "./CoinDetails.scss"

export default function CoinDetails() {
  const [data, setData] = useState()
  const { id } = useParams()
  const [curr, setCurr] = useState("inr")
  const [days, setDays] = useState("24h")
  const [chartArray, setChartArray] = useState([])
  const curencyValue = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$"
  const daysBtns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"]

  const fetchDetails = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const chartRes = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${curr}&days=${days}`
    )
    if (!res.ok) throw new Error("Responce is not ok!")
    if (!chartRes.ok) throw new Error("Responce is not ok!")

    const data = await res.json()
    const chartData = await chartRes.json()

    setData(data)
    setChartArray(chartData.prices)
  }
  useEffect(() => {
    fetchDetails()
  }, [id, curr, days])

  return (
    <div className="coin-details">
      <section className="chart">
        <Chart days={days} array={chartArray} currency={curencyValue} />
      </section>
      <section className="chart-btn">
        {daysBtns.map((ele) => (
          <button onClick={() => setDays(ele)} key={ele}>
            {ele}
          </button>
        ))}
      </section>
      <div>
        <img src={data?.image?.large} alt="" />
      </div>
      <div className="coin-heading">
        <h1>{data?.name}</h1>
        <h3> Rank {data?.market_cap_rank} </h3>
        <p>Rs. {data?.market_data?.current_price["inr"]}</p>
        <p>
          {data?.market_data?.price_change_percentage_24h > 0
            ? `Increasing ${data?.market_data?.price_change_percentage_24h}`
            : `Decreasing ${data?.market_data?.price_change_percentage_24h}`}
        </p>
      </div>
      <div className="market-data">
        <p>Market Cap: {data?.market_data?.market_cap["inr"]} </p>
        <p> Circulating Supply: {data?.market_data?.circulating_supply} </p>
        <p>All time high: {data?.market_data.ath["inr"]} </p>
        <p>All time low: {data?.market_data.atl["inr"]} </p>
      </div>
    </div>
  )
}
