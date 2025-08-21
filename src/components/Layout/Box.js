import React from 'react';
import classes from "../Layout/Box.module.css"
const Box = props => {
    return (
        <div className={classes.hero__card}>
            <h1 className={classes.hero__title}>Delicious Food, Delivered To You</h1>
            <p className={classes.hero__text}>
                Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
                All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
            </p>
        </div>
    );
}

export default Box;