import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import CoinCard from "../components/CoinCard";

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState();
  const [curr, setCurr] = useState("inr");
  const curencyValue = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$";

  const fetchData = async (curr) => {
    const result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&page=1`
    );
    setApiData(result?.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData(curr);
  }, [curr]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
