import React, {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import PopupCart from "./components/Outer/PopupCart";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  function cartShowHandler(status) {
    setIsShowCart(status);
  }

  return (
    <Fragment>
        <Header onShowCart={cartShowHandler}/>
        {isShowCart &&
          <PopupCart onClick={cartShowHandler}/>
        }
    </Fragment>
  );
}

export default App;
