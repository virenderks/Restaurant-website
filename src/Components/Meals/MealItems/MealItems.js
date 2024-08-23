import React from "react";
import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
const MealItems = (prop) => {
  const price = `$${prop.meal.price}`;

  // console.log(prop.meal)
  return (
    <li className={classes.meal}>
      <div>
        <h3>{prop.meal.name}</h3>
        <div className={classes.description}>{prop.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm meal={prop.meal} id={prop.meal.id}/>
      </div>
    </li>
  );
};

export default MealItems;