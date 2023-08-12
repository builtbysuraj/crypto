import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import CoinDetails from "./pages/coin-details/CoinDetails"
import Coin from "./pages/coin/Coin"
import Home from "./pages/home/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coin />} />
        <Route path="/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

// https://api.coingecko.com/api/v3/coins/bitcoin
