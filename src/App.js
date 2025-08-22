import React, {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import PopupCart from "./components/Outer/PopupCart";
import CartState from "./components/Context/CartState";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  function cartShowHandler(status) {
    setIsShowCart(status);
  }

  return (
    <Fragment>
      <CartState>
        <Header onShowCart={cartShowHandler}/>
        {isShowCart &&
          <PopupCart onClick={cartShowHandler}/>
        }
      </CartState>
    </Fragment>
  );
}

export default App;
