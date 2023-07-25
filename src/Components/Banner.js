import React from "react";
import styles from "../Styles/Banner.module.css";
import { Link } from "react-router-dom";
import Jewelry from "./Jewelry";

function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.left}>
          <div className={styles.sale}>
            <p>Hot Now</p>
          </div>
          <div className={styles.jewelry}>
            <Link exact to="./Jewlery">
              <p>Jewelry</p>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.shoes}>
            <Link exact to="./Shoes">
              <p>Shoes</p>
            </Link>
          </div>
          <div className={styles.jackets}>
            <Link exact to="./Jackets">
              <p>Jackets</p>
            </Link>
          </div>
          <div className={styles.pants}>
            <Link exact to="./Pants">
              <p>Pants</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
