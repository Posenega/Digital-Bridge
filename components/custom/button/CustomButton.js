import React from "react";
import styles from "./CustomButton.module.scss";

export default function CustomButton() {
  return (
    <div className={styles.button__container}>
      <button type="submit" className={styles.button}>
        <span className={styles.button__text}>Send</span>
      </button>
    </div>
  );
}
