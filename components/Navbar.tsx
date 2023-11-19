import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.link}>
                Home 
            </Link>
            <Link href="/about" className={styles.link}>
                About 
            </Link>
            <Link href="/services" className={styles.link}>
                Services
            </Link>
            <Link href="/gallery" className={styles.link}>
                Gallery
            </Link>
            <Link href="/contact" className={styles.link}>
                Contact 
            </Link>
        </nav>
    )
  }

  export default Navbar


/* <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link> */
          
//   <nav className={styles.nav}>
//      <Link href="/">
//        <a className={styles.link}>Home</a>
//      </Link>
//      <Link href="/about">
//        <a className={styles.link}>About</a>
//      </Link>
//      <Link href="/contact">
//        <a className={styles.link}>Contact</a>
//      </Link>
//    </nav>