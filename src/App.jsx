import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}
