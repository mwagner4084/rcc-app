// pages/index.js
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
          <div className={styles.hero}>
              <div className={styles.section}>
                  <Image
                  className={styles.logo}
                  src="/img/logo-transparent.png"
                  alt="RSC Logo"
                  width={300}
                  height={200}
                  priority />
              </div>
              <h1 className={styles.title}>RSC Construction Services, LLC.</h1>
              <p className={styles.subtitle}>Your trusted partner in Handyman and Carpentry Services.</p>
              <hr></hr>
              <div className={styles.section}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    Handyman Services
                  </li>
                  <i className="bi bi-dot"></i>
                  <li className={styles.li}>
                    Carpentry Services
                  </li>
                  <li className={styles.li}>
                    Home Improvement
                  </li>
                  <li className={styles.li}>
                    Masonry Repointing
                  </li>
                  <li className={styles.li}>
                    Deck Repair
                  </li>
                </ul>
              </div>
              <button className={styles.ctaButton}>Request a quote</button>
          </div>
      </main>
  </div>
  );
}
