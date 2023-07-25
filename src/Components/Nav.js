import React from "react";
import styles from "../Styles/Nav.module.css";
import { NavLink } from "react-router-dom";
import App from "../App";
import Kids from "./Kids";
import Women from "./Women";
import Men from "./Men";
import Banner from "./Banner";

function Nav() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Banner />;
      break;
    case "/Kids":
      Component = <Kids />;
      break;
    case "/Women":
      Component = <Women />;
      break;
  }
  return (
    <>
      <div className={styles.nav}>
        <NavLink exact to="/">
          <h2> Velvet</h2>
        </NavLink>

        <div id={styles.kids} className={styles.button}>
          <NavLink exact to={"./Kids"}>
            Kids
          </NavLink>
        </div>
        <div id={styles.women} className={styles.button}>
          <NavLink exact to="./Women">
            Women
          </NavLink>
        </div>
        <div id={styles.men} className={styles.button}>
          <NavLink exact to="./Men">
            Men
          </NavLink>
        </div>
        <input type="text" id={styles.search} placeholder="Search" />
        <div className={styles.login}>
          <button
            id={styles.login}
            className={styles.login_img}
            href=""
          ></button>
        </div>
        <div className={styles.basket}>
          <button className={styles.basket_img}></button>
        </div>
      </div>
    </>
  );
}

export default Nav;
