import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./CoinDetails.scss"

export default function CoinDetails() {
  const [data, setData] = useState()
  const { id } = useParams()

  const fetchDetails = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    if (!res.ok) throw new Error("Responce is not ok!")
    const data = await res.json()
    setData(data)
  }
  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <div className="coin-details">
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
