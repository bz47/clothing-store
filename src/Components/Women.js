import React from "react";
import styles from "../Styles/Women.module.css";
import Filter from "../Components/Filter";

function Women() {
  return (
    <>
      <div className={styles.women}>
        <div className={styles.header}>
          <h2>Women's Collection</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            aliquid labore odio ex est neque hic ut qui illo nulla?
          </h4>
        </div>
      </div>
      <Filter />
      <div className={styles.showcase}>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div className={styles.info}>
            <h3>SweatShirt</h3>
            <div>
              <h4>$60</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div className={styles.info}>
            <h3>SweatShirt</h3>
            <div>
              <h4>$60</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div className={styles.info}>
            <h3>SweatShirt</h3>
            <div>
              <h4>$60</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div className={styles.info}>
            <h3>SweatShirt</h3>
            <div>
              <h4>$60</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div className={styles.info}>
            <h3>SweatShirt</h3>
            <div>
              <h4>$60</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div className={styles.info}>
            <h3>SweatShirt</h3>
            <div>
              <h4>$60</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
