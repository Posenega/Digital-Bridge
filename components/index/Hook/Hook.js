import React from "react";
import styles from "./Hook.module.scss";
import MetaVerseHookIcon from "../../icons/MetaVerseHookIcon";
import { useMediaPredicate } from "react-media-hook";

export default function Hook() {
  const lessThan1000 = useMediaPredicate("(max-width: 1000px)");

  return (
    <section className={styles.hook}>
      <div id="1">
        <div className={styles.text__container}>
          <h1 className={styles.hook__title}>
            Digitalize your businesses now with Digital Bridge
          </h1>
          <span className={styles.hook__text}>
            <b>Digital Bridge</b> helps businesses transition to the digital
            realm by offering a range of digital solutions, including websites,
            apps, and a presence on the web3 metaverse.
          </span>
        </div>
      </div>
      <div id="2" className={styles.icon__container}>
        <MetaVerseHookIcon size={lessThan1000 ? "65%" : "50%"} />
      </div>
    </section>
  );
}
