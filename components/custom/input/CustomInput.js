import React from "react";
import styles from "./CustomInput.module.scss";

export default function CustomInput(props) {
  return (
    <div className={styles.customInput__main}>
      <span className={styles.hint__text}>{props.hintText}</span>
      <input
        required
        type={props.type}
        className={styles.form__entry}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}
