import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from './Layout.module.scss'

export default ({ children }) => (
  <div className={styles.page}>
    <header className={styles.header}>
      <h1 className={styles.header__title}>Pomodoro</h1>
      <nav>
        <a className={styles.header__link} href="https://brettk.dev/">brettk.dev</a>
      </nav>
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <a className={styles.footer__link} href="https://github.com/bkinnamon">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
      <a className={styles.footer__link} href="https://twitter.com/bdkinnamon">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
    </footer>
  </div>
)
