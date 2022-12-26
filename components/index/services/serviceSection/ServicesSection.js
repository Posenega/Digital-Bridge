import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import styles from "./Services.module.scss";
import WebIcon from "../../../icons/WebIcon";
import AppIcon from "../../../icons/AppIcon";
import MetaverseIcon from "../../../icons/MetaverseIcon";

export default function Services() {
  return (
    <section className={styles.main__container}>
      <h2>
        We offer the best solutions
        <br />
        to transition to the MetaVerse
      </h2>
      <div className={styles.list__services}>
        <ServiceCard
          svg={<WebIcon className={styles.svg__container} />}
          serviceTitle="Website Development"
        />
        <ServiceCard
          svg={<AppIcon className={styles.svg__container} />}
          serviceTitle="App Development"
        />
        <ServiceCard
          svg={<MetaverseIcon className={styles.svg__container} />}
          serviceTitle="Meta Space"
        />
      </div>
    </section>
  );
}
