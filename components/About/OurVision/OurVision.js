import React from 'react'
import VisionIcon from '../../icons/VisionIcon'
import styles from './OurVision.module.scss'

export default function OurVision() {
  return (
    <div className={styles.vision__main}>
      <div className={styles.icon__container}>
        <VisionIcon height="100%" />
      </div>
      <div className={styles.about__text}>
        <h1>Our Vision</h1>
        <p>
          Et occaecat sint elit pariatur do consequat deserunt nisi tempor. Ad
          nostrud magna voluptate ea Lorem fugiat laborum sint cillum non ad ad
          non. Est laborum occaecat elit amet occaecat mollit enim laboris
          dolore tempor non. Sit est labore aute est labore cillum sint ea minim
          et aliqua quis occaecat. Incididunt nisi laboris incididunt dolor
          exercitation non deserunt est dolor cillum ut. Velit proident
          voluptate fugiat sit tempor irure do commodo qui sint voluptate quis.
        </p>
      </div>
    </div>
  )
}
