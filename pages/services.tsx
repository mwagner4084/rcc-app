// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Services.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.section}>
                        <Image
                        className={styles.logo}
                        src="/img/logo-transparent.png"
                        alt="RSC Logo"
                        width={400}
                        height={300}
                        priority />
                    </div>
                    <h1 className={styles.title}>RSC Construction Services, LLC.</h1>
                    <p className={styles.subtitle}>Your trusted partner in Handyman and Carpentry Services.</p>
                    <button className={styles.ctaButton}>Get a quote</button>
                </div>
            </main>
        </div>
    </div>
  );
}
