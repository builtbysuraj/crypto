import { useEffect, useState } from "react"
import CoinCard from "../../components/coin-card/CoinCard"
import Loader from "../../components/loader/Loader"
import "./Coin.scss"

export default function Coin() {
  const [loading, setLoading] = useState(true)
  const [apiData, setApiData] = useState()
  const [curr, setCurr] = useState("inr")
  const [page, setPage] = useState(1)
  const curencyValue = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$"

  const btn = new Array(132).fill(0)

  const fetchData = async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&page=${page}`
    )
    if (!res.ok) throw new Error("Responce is not OK!")
    const data = await res.json()
    setApiData(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchData(curr)
  }, [curr, page])

  const changePage = (index) => {
    if (index !== page) {
      setPage(index)
      setLoading(true)
    }
  }

  return (
    <div className="coins">
      <form className="price-radio">
        <span>
          <input
            type="radio"
            name="price"
            id="inr"
            value="inr"
            checked={curr === "inr"}
            onChange={(event) => setCurr(event.target.value)}
          />
          <label htmlFor="inr">₹ (INR)</label>
        </span>
        <span>
          <input
            type="radio"
            name="price"
            id="eur"
            value="eur"
            checked={curr === "eur"}
            onChange={(event) => setCurr(event.target.value)}
          />
          <label htmlFor="eur">€ (EUR)</label>
        </span>
        <span>
          <input
            type="radio"
            name="price"
            id="usd"
            value="usd"
            checked={curr === "usd"}
            onChange={(event) => setCurr(event.target.value)}
          />
          <label htmlFor="usd">$ (USD)</label>
        </span>
      </form>
      <div className="page-wrapper">
        {btn.map((e, i) => (
          <div key={i}>
            <button className="page-btn" onClick={() => changePage(i + 1)}>
              {i + 1}
            </button>
          </div>
        ))}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-wrapper">
          {apiData?.map((coin) => {
            return (
              <CoinCard
                key={coin.id}
                image={coin.image}
                symbol={coin.symbol}
                name={coin.name}
                current_price={coin.current_price}
                curencyValue={curencyValue}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
