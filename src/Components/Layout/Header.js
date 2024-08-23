import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals1.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (prop) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton setOpenCartHandler={prop.onShow} />
      </header>
      <div className={classes["main-image"]}>
        {/*Since it's a CSS class with a dash inside of it we can't use to dot (.) notation */}
        <img src={mealsImage} alt="Table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;