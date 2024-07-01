import React from "react";

import styles from "./Text.module.css";

function Text(props) {
  const { children, fontWeight, style } = props;

  return (
    <span className={styles[fontWeight || "normal"]} style={style}>
      {children}
    </span>
  );
}

export default Text;
