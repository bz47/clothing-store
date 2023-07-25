import React from "react";
import styles from "../Styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <h2> Velvet</h2>
      <div id={styles.kids} className={styles.button}>
        <a href="">Kids</a>
      </div>
      <div id={styles.women} className={styles.button}>
        <a href="">Women</a>
      </div>
      <div id={styles.men} className={styles.button}>
        <a href="">Men</a>
      </div>
      <input type="text" id={styles.search} placeholder="Search" />
      <div className={styles.login}>
        <button id={styles.login} className={styles.login_img} href=""></button>
      </div>
      <div className={styles.basket}>
        <button className={styles.basket_img}></button>
      </div>
    </div>
  );
}

export default Nav;
