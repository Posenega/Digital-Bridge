import React from "react";
import styles from "./Avatar.module.scss";

export default function Avatar(props) {
  return (
    <div className={styles.contributor__space}>
      <a href={props.url}>
        <div className={styles.circle__avatar}>
          <img className={styles.avatar__image} src={props.src} />
        </div>
        <p className={styles.avatar__name}>{props.name}</p>
      </a>
    </div>
  );
}
