import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = (prop) => {
  const cartctx = useContext(CartContext);
  // let amount=cartctx.items.reduce((acum,item)=>
  // {
  //   return acum+Number(item.price)
  // },0)

  // let absAmount=Math.floor(amount)

  const deleteItemHandler = (id) => {
    cartctx.removeItem(id);
  };

  const addItemHandler=(id)=>
  {
    cartctx.addOnItem(id)
  }

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => {
        return (
          <li key={item.id}>
            <span>
              Dish : <div>{item.name}</div>
            </span>{" "}
            <span>
              Quantity:{" "}
              <div>
                {item.quantity} <button onClick={addItemHandler.bind(this,item.id)}>+</button>{" "}
                <button onClick={deleteItemHandler.bind(this, item.id)}>
                  -
                </button>{" "}
              </div>
            </span>{" "}
            <span>
              Price : <div>{item.price}</div>
            </span>{" "}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onCloseBackdrop={prop.onClose}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={prop.onClose} className={classes["button--alt"]}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;