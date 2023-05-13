import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&page=1"
    );
    setApiData(result?.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="coins">
      <form className="price-radio">
        <input type="radio" name="price" id="inr" value="inr" />
        <label htmlFor="inr">INR</label>
        <input type="radio" name="price" id="eur" value="eur" />
        <label htmlFor="eur">EUR</label>
        <input type="radio" name="price" id="usd" value="usd" />
        <label htmlFor="usd">USD</label>
      </form>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-wrapper">
          {apiData?.map((coin) => {
            return (
              <div key={coin.id} className="coin-card">
                <img src={coin.image} alt="coin icon" />
                <div className="coin-symbol">{coin.symbol}</div>
                <div className="coin-name">{coin.name}</div>
                <div className="coin-price">₹{coin.current_price}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
