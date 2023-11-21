// pages/about.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <i className="bi bi-dot"></i>Meet the Owner<i className="bi bi-dot"></i>
        </h1>
        <Image
          className={styles.signature}
          src="/img/Signature.png"
          alt="RSC Logo"
          width={200}
          height={100}
          priority
        />
        <p className={styles.description}>
          Robert S. Connell
        </p>
        <hr></hr>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>
              Introduction &rarr;
            </h2>
            <p>
              Welcome to RSC Construction Services, LLC. I&apos;m Robb Connell, and I&apos;ve dedicated over three decades to the building and construction trades. My journey through various leadership roles and extensive field experience has culminated in the founding of this company—a beacon of quality for homeowners seeking unparalleled craftsmanship. As a veteran, I bring a unique perspective and dedication to each project. The discipline and precision I learned in the Navy as an Avionics Supervisor have been the bedrock of my work ethic.
            </p>
          </div>
          <div className={styles.card}>
            <h2>
              My Journey &rarr;
            </h2>
            <p>
              From guiding Connell&apos;s Restoration & Sealants to becoming an industry benchmark to leading projects as the VP of Structural Restoration & Sealants, my career has been driven by a passion for excellence and growth. The discipline and precision I learned in the Navy as an Avionics Supervisor have been the bedrock of my work ethic. These experiences, combined with a rigorous education in Mathematics and Accountancy, empower me to deliver services that not only meet but exceed your expectations.
            </p>
          </div>
          <div className={styles.card}>
            <h2>
              Core Values &rarr;
            </h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>
                  <p className={styles.lead}>Honesty</p>
                </strong>

              </li>
              <li className={styles.li}>
                <strong>
                  <p className={styles.lead}>Integrity</p>
                </strong>

              </li>
              <li className={styles.li}>
                <strong>
                  <p className={styles.lead}>Craftsmanship</p>
                </strong>
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2>
              Credentials &rarr;
            </h2>
            <p>
              With a solid educational background and a firm grasp on practical skills, I am proud to bring a scholarly approach to the building arts. This unique combination ensures that RSC Construction Services, LLC isn&apos;t just about building and repairs—it&apos;s about creating lasting value for your home.
            </p>
          </div>
          <Link href="/contact" className={`${styles.ctaButton} block m-auto`}>Request a quote</Link>
        </div>
      </main>
    </div>
  );
}
