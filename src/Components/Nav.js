import React from "react";
import styles from "../Styles/Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
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
        <NavLink exact to="./Login">
          <div style={{ color: "silver" }} class="material-symbols-outlined">
            person
          </div>
        </NavLink>
        <NavLink exact to="./Basket">
          <div style={{ color: "silver" }} class="material-symbols-outlined">
            shopping_cart
          </div>{" "}
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
