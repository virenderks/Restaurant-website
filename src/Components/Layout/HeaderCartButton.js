import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
const HeaderCartButton = (prop) => {
  
  const cartctx=useContext(CartContext);
  let quantity=0;
  cartctx.items.forEach((item)=>
  {
    quantity=quantity+Number(item.quantity)
  })
  // const numberOfCartItems=cartctx.items.reduce((curNumber,item)=>
  // {
  //     return curNumber+Number(item.quantity)
  // },0)

  return (
    <button onClick={prop.setOpenCartHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;