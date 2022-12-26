import React from "react";
import styles from "./ServiceCard.module.scss";

export default function ServiceCard(props) {
  return (
    <div className={styles.main__card}>
      {props.svg}
      <h3>{props.serviceTitle}</h3>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel
        consectetur nisi, in vehicula dolor. Integer mollis ornare magna, vitae
        interdum leo fringilla suscipit.
      </span>
    </div>
  );
}
