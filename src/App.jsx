import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Order from "./components/Order";
import Orders from "./components/Orders";
import Product from "./components/Product";
import Products from "./components/Products";
import Users from "./components/Users";

// import Home from './components/Home.jsx'
// import Temp from './components/Temp.jsx'
// export default function App() {
//   return (
//     <>
//     <Home name="John" age={21}/>
//     <Temp/>
//     </>
//   )
//   }
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Cafe Frontend</h1>
        {/* <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1> */}
        <Link to="/">Home</Link>-<Link to="/cart">MyCart</Link>-
        <Link to="/order">MyOrder</Link>-<Link to="/admin">Admin</Link>-
        <Link to="/login">Login</Link>
        <Routes>
          <Route index element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
        <h3>This is the footer</h3>
      </BrowserRouter>
    </div>
  );
}
