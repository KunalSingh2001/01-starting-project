import React from "react";
import classes from "./PopupCart.module.css";
import ReactDOM from "react-dom";

function PopupCart(props) {
    function CartHide() {
        props.onClick(false);
    }

  const backdrop = (
    <div className={classes["backdrop"]}></div>
  );

  const modal = (
    <div className={classes["modal"]}>
      <header>Sushi</header>
      <div className={classes["content"]}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes["actions"]}>
        <button className={classes["close"]} onClick={CartHide}>Close</button>
        <button className={classes["order"]}>Order</button>
      </div>
    </div>
  );

  return (
    <>
      {ReactDOM.createPortal(backdrop, document.getElementById("overlays"))}
      {ReactDOM.createPortal(modal, document.getElementById("overlays"))}
    </>
  );
}

export default PopupCart;
