import React, { useContext } from "react";
import classes from "./PopupCart.module.css";
import ReactDOM from "react-dom";
import noteContext from "../Context/noteContext";
function PopupCart(props) {
  const {cart, increaseQuantity, decreseQuantity} = useContext(noteContext);
  function CartHide() {
    props.onClick(false);
  }

  const backdrop = <div className={classes["backdrop"]}></div>;

  const modal = (
    <div className={classes["modal"]}>
      {cart.length === 0 ? (
        <p>No item yet!</p>
      ) : (
        cart.map((item) => (
          <div className={classes["cart-item"]} key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <div className={classes["summary"]}>
                <span className={classes["price"]}>${item.amount}</span>
                <span className={classes["amount"]}>
                  x{" "}
                  <input
                    type="number"
                    className="cart-input"
                    value={item.quantity}
                    min="1"
                  />
                </span>
              </div>
            </div>
            <div className={classes["actions-btns"]}>
              <button onClick={() => decreseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <div className={classes["total"]}>
        <span>Total Amount</span>
        <span>
          $
          {cart
            .reduce((acc, item) => acc + item.quantity * item.amount, 0)
            .toFixed(2)}
        </span>
      </div>

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
