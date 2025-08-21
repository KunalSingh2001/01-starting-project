import React, {Fragment} from "react";
import Header from "./components/Layout/Header";
import PopupCart from "./components/Outer/PopupCart";

function App() {
  return (
    <Fragment>
        <Header/>
        <PopupCart/>
    </Fragment>
  );
}

export default App;
