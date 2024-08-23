import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      {openCart && <Cart onClose={closeCartHandler} />}
      <Header onShow={openCartHandler}></Header>
      <main>
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;