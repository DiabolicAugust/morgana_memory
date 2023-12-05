import React from "react";

import styles from "./AlertDialog.module.css";

const AlertDialog = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

export default AlertDialog;
