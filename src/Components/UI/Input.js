import React from "react";
import classes from './Input.module.css'


const Input = (prop) => {
  return (
    <div className={classes.input}>
      <label htmlFor={prop.input.id}>{prop.label}</label>
      <input  {...prop.input} />
    </div>
  );
};

export default Input;


// here we are passing spread operator {...prop.input}
//let input={id:2,type:number,max:5}
//here in input it will be appear as <input id="2" type="number" max="5"/>
// means all object key values are set as attribute to this element