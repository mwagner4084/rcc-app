// pages/index.js
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
          <p className={styles.subtitle}>Your trusted partner in Handyman and Carpentry Services. Veteran-owned and operated.</p>
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
              <i className="bi bi-dot"></i>
              <li className={styles.li}>
                Home Improvement
              </li>
              <i className="bi bi-dot"></i>
              <li className={styles.li}>
                Masonry Repointing
              </li>
              <i className="bi bi-dot"></i>
              <li className={styles.li}>
                Deck Repair
              </li>
            </ul>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>
                <Link href="/about">Meet the Owner &rarr;</Link>
              </h2>
              <p>
                Learn more about the background and journey of owner, Robb Connell.
              </p>
            </div>
            <div className={styles.card}>
              <h2>
                <Link href="/services">Services Offered &rarr;</Link>
              </h2>
              <p>
                Explore the wide range of services offered by RSC Construction Services, LLC.
              </p>
            </div>
            <div className={styles.card}>
              <h2>
                <Link href="/gallery">Gallery &rarr;</Link>
              </h2>
              <p>
                View a selection of projects completed by RSC Construction Services, LLC.
              </p>
            </div>
          </div>
          <Link href="/contact" role="button" className={`${styles.ctaButton} block m-auto`}>
            Request a quote
          </Link>
        </div>
      </main >
    </div >
  );
}
