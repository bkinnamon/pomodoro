import React from "react";
import styles from "./TimeDisplay.module.scss";

export default ({children}) => (
  <span className={styles.timeDisplay}>
    {children}
  </span>
);
