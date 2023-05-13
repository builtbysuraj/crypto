export default function CoinCard(coin) {
  return (
    <div key={coin.id} className="coin-card">
      <img src={coin.image} alt="coin icon" />
      <div className="coin-symbol">{coin.symbol}</div>
      <div className="coin-name">{coin.name}</div>
      <div className="coin-price"> {coin.curencyValue} {coin.current_price}</div>
    </div>
  );
}
