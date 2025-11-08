import React from "react";
import styles from "./homepage.module.css";

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.dotBouncer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className={styles.loadingText}>Loading</h2>
      <p className={styles.loadingSubtext}>Hopefully not for so long 🙂</p>
    </div>
  );
};

export default Loading;
