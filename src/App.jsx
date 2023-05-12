import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Coin from "./components/Coin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}
