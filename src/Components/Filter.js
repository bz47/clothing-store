import React from "react";
import styles from "../Styles/Filter.module.css";

function Filter() {
  return (
    <div className={styles.filters}>
      <div className={styles.left}>
        <section id={styles.filterbar}></section>
        <h3>Filter</h3>
      </div>
      <div className={styles.center}>
        <h3> 6 Products</h3>
      </div>
      <div className={styles.right}>
        <h3>Sort By</h3>
        <section id={styles.dropdown}></section>
      </div>
    </div>
  );
}

export default Filter;
