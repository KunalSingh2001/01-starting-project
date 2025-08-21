import { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Item from "./Item";
import Box from "./Box";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Delicious food" />
        <Box/>
        <Item/>
      </div>
    </Fragment>
  );
};

export default Header;
