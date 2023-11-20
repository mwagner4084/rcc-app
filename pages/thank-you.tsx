import Image from 'next/image'
import styles from '../styles/Thanks.module.css'

export default function Thanks() {
    return (
        <div className={styles.body}>
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
                <h1 className={styles.title}>Thank You!</h1>
                <p className={styles.subtitle}>Your message has been sent.</p>
                <hr></hr>
                <div className={styles.section}>
                    <p className={styles.text}>
                        I will be in touch with you shortly.
                    </p>
                </div>
            </div>
        </div>
    )
}