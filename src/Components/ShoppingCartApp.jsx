import { useState } from "react";
import Earphones from "./Earphones";
import AddToCart from "./AddToCart";

function ShoppingCartApp() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <div>
      <Earphones onAddToCart={handleAddToCart} />
      <AddToCart cartItems={cartItems} />
    </div>
  );
}

export default ShoppingCartApp;
