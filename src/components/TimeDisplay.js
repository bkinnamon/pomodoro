import React from "react";

import styles from "./TimeDisplay.module.scss";

export default ({children, isDark}) => {
  let style = styles.timeDisplay
  if (isDark) {
    style += ' ' + styles.dark
  }
  
  return (
    <span className={style}>
      {children}
    </span>
  );
}
