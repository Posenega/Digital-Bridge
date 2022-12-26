import React from 'react'
import Facebook from '../icons/FacebookIcon'
import Instagram from '../icons/InstagramIcon'
import Twitter from '../icons/TwitterIcon'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <img height="150px" width="150px" src="/logo.png" />
      <nav className={styles.footer__nav}>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div className={styles.social_media}>
        <div className={styles.footer__divider__container}>
          <hr className={styles.footer__divider} />
        </div>
        <div className={styles.social_media__icons}>
          <Twitter height="25" width="25" />
          <Facebook height="25" width="25" />
          <Instagram height="25" width="25" />
        </div>
        <div className={styles.footer__divider__container}>
          <hr className={styles.footer__divider} />
        </div>
      </div>
    </section>
  )
}
