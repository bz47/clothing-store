import React from "react";
import styles from "../Styles/Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <div className={styles.sale}>
          <p>Hot Now</p>
        </div>
        <div className={styles.jewelry}>
          <p>Jewelry</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.shoes}>
          <p>Shoes</p>
        </div>
        <div className={styles.jackets}>
          <p>Jackets</p>
        </div>
        <div className={styles.pants}>
          <p>Pants</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
