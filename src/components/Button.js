import React from "react";
import styles from "./Button.module.scss";

export default ({children, label='', onClick}) => (
  <button className={styles.button} onClick={onClick} aria-label={label}>
    {children}
  </button>
);
