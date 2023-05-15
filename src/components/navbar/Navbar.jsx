import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}> Home </Link>
      <Link to={"/coins"}> Coins </Link>
    </div>
  );
}
