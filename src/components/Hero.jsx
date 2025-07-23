import { Link } from "react-router-dom";
import { useContext } from "react";
import App, { AppContext } from "../App";
import Products from "./Products";
export default function Hero() {
  const { user } = useContext(AppContext);
  return (
    <div className="hero-container">

      <p>Enjoy the best coffee and snacks in town!</p>
      <Link to="/Products" className="hero-button">
        Explore Products
      </Link>
    </div>
  );
}
