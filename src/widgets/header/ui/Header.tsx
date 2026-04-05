import Link from "next/link"
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img className={styles.logo__img} src="assets/logo.svg" alt="cat-logo" />
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.nav__item}>
            <Link href="/" className={styles.nav__link}>Home</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/about" className={styles.nav__link}>About</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/contacts" className={styles.nav__link}>Contacts</Link>
          </li>
        </ul>  
      </nav>
    </header>
  )
}