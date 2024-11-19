import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Earphones from "./Components/Earphones";
import Headphones from "./Components/Headphpones";
import Speakers from "./Components/Speakers";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AddToCart from "./Components/AddToCart";
import { useState } from "react";
import ForgetPassword from "./UserLogin&Signup/ForgetPassword";
import Login from "./UserLogin&Signup/Login";
import Signup from "./UserLogin&Signup/Signup";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex > -1) {
        // If it exists, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/earphones"
          element={<Earphones addToCart={addToCart} />}
        />
        <Route
          path="/headphones"
          element={<Headphones addToCart={addToCart} />}
        />
        <Route path="/speakers" element={<Speakers addToCart={addToCart} />} />
        <Route
          path="/add_to_cart"
          element={<AddToCart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;