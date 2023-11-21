import Image from "next/image";
import styles from "../styles/Thanks.module.css";

export default function Thanks() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <Image
                        className={styles.logo}
                        src="/img/logo-transparent-black.png"
                        alt="RSC Logo"
                        width={300}
                        height={200}
                        priority
                    />
                </div>
                <div className={styles.section}>
                    <h1 className={styles.title}>Thank You!</h1>
                    <p className={styles.subtitle}>Your request has been sent.</p>
                </div>
                <hr></hr>
                <div className={styles.section}>
                    <p className={styles.text}>
                        I look forward to working with you, and I will be in touch shortly!
                    </p>
                </div>
            </div>
        </div>
    );
}