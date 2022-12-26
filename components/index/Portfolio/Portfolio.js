import React from "react";
import Avatar from "./avatar/Avatar";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.profile__container}>
        <Avatar
          url="https://selimellieh.me"
          name="Selim Ellieh"
          src="/selim__profile.jpg"
        />
        <Avatar
          url="https://theokhalil.me"
          name="Théo Khalil"
          src="/theo__profile.jpg"
        />
      </div>
      <div className={styles.personal__info}>
        <h2>Who We Are</h2>
        <span>
          Adipisicing veniam duis velit irure ipsum laborum do non mollit Lorem.
          Ex eu sunt nulla id ad excepteur Lorem. Ipsum occaecat elit Lorem
          irure.
        </span>
      </div>
    </section>
  );
}
