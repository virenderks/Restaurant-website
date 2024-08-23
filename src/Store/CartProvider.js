import React, { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (prop) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    let hasItem = false;

    console.log(item.quantity)
    const newArray = [...items];
    newArray.forEach((data, index) => {
      if (data.id === item.id) {
        newArray[index].quantity =
          Number(newArray[index].quantity) + Number(item.quantity);
        hasItem = true;
      }
    });

    // items.forEach((data, index) => {
    //   if (data.id === item.id) {
    //     items[index].quantity =
    //       Number(items[index].quantity) + Number(item.quantity);
    //     hasItem = true;
    //   }
    // });

    if (hasItem === false) {
      setItems([...items, item]);
    } else {
      setItems(newArray);
    }
  };

  let totalAmt = 0;
  items.forEach((item) => {
    totalAmt = totalAmt + item.price * item.quantity;
  });

  console.log(totalAmt);

  const removeItemToCartHandler = (id) => {
    console.log(id);
    let arr = [...items];
    let hasId = false;
    arr.forEach((item, index) => {
      if (item.id === id) {
        arr[index].quantity = Number(arr[index].quantity) - 1;
        hasId = true;

        if (arr[index].quantity === 0) {
          arr.splice(index, 1);
          hasId = true;

          console.log(arr);
        }
      }
    });

    if (hasId === true) {
      setItems(arr);
    }
  };

  const addItemHandler = (id) => {
    let arr1 = [...items];
    let hasId = false;

    arr1.forEach((item, index) => {
      if (item.id === id) {
        arr1[index].quantity = Number(arr1[index].quantity) + 1;
        hasId = true;
      }
    });

    if (hasId === true) {
      setItems(arr1);
    }
  };

  const cartContext = {
    items: items,
    // totalAmount: items.reduce((ack, item) => {
    //   return (ack =ack+ item.price * item.quantity);
    // }, 0),
    totalAmount: totalAmt,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    addOnItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log(items)}
      {prop.children}
    </CartContext.Provider>
  );
};
export default CartProvider;