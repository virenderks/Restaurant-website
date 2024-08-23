import React from "react";
import classes from "./MealSummary.module.css"

const MealSummary=(prop)=>
{
    return(
        <section className={classes.summary}> 
            <h2>Where every flavor tells a story</h2>
            <p>A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals.</p>
            <p> The restaurant offers a menu with various options for your meal, to choose from.</p>
        </section>
    )
}

export default MealSummary