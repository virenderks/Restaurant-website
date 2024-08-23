import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Store/cart-context";
const MealItemForm = (prop) => {


const itemctx=useContext(CartContext)
const addItemHandler=(event)=>
{
  event.preventDefault()
  // console.log(prop.meal)
  const quantity=document.getElementById("amount"+prop.id).value

  itemctx.addItem({...prop.meal,quantity:quantity})
  document.getElementById("amount"+prop.id).value=1
}

  return (

  
    <form className={classes.form}>
      {/* {console.log(itemctx,"in return")} */}
      <Input
        label="Amount"
        input={{
          id: "amount"+prop.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          step: 1,
        }}
      />
      <button onClick={addItemHandler}>+ADD</button>
    </form>
  );
};

export default MealItemForm;


//here in <Input>, in input={{}}, we are passing object i.e {{key:value}}}