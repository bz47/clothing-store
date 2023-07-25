import React from "react";
import styles from "../Styles/Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <h2> Name</h2>
      <div className={styles.button}>
        <a href="">Kids</a>
      </div>
      <div className={styles.button}>
        <a href="">Women</a>
      </div>
      <div className={styles.button}>
        <a href="">Men</a>
      </div>
      <input type="text" className={styles.search} placeholder="Search" />
      <div className={styles.login}>
        <button className={styles.login_img} href=""></button>
      </div>
      <div className={styles.basket}>
        <button className={styles.basket_img}></button>
      </div>
    </div>
  );
}

export default Nav;
