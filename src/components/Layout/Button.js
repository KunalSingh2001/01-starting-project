import React from 'react';
import classes from "./Button.module.css";

function Button (props) {
    return (
        <div className={classes['item-actions']}>
            <button className={classes['button']}>{props.name}</button>
        </div>
    );
}

export default Button;