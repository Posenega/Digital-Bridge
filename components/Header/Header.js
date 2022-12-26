import React from "react";
import styles from "./Header.module.scss";
import { useMediaPredicate } from "react-media-hook";

export default function Header() {
  const lessThan600 = useMediaPredicate("(max-width: 600px)");

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <a className={styles.navbar__brand}>Digital Bridge</a>
        <nav className={styles.navbar__nav}>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact us</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
      {!lessThan600 ? (
        <div className={styles.cta__container}>
          <button className={"btn-primary " + styles.cta__btn}>
            Get a quote
          </button>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}
