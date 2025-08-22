import React, { useContext } from "react";
import classes from "./PopupCart.module.css";
import ReactDOM from "react-dom";
import noteContext from "../Context/noteContext";
function PopupCart(props) {
  const cartData = useContext(noteContext);
  function CartHide() {
    props.onClick(false);
  }

  const backdrop = <div className={classes["backdrop"]}></div>;

  const modal = (
    <div className={classes["modal"]}>
      {cartData.length === 0 ? (
        <p>No item yet!</p>
			) : (
				cartData.map((item) => (
				<div key={item.id}>
					<header>{item.name}</header>
					<div className={classes["content"]}>
					<span>Total Amount</span>
					<span>{item.amount}</span>
					</div>
				</div>
				))
			)}

      <div className={classes["actions"]}>
        <button className={classes["close"]} onClick={CartHide}>
          Close
        </button>
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
