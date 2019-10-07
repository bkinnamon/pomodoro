import React from "react";
import styles from "./Button.module.scss";

export default ({children, onClick}) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
