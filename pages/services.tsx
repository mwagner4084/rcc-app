// pages/services.tsx
import Image from 'next/image';
import styles from '../styles/Services.module.css';

export default function AboutPage() {
  return (
    <div className={styles.body}>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Services Offered
            </h1>
            <hr></hr>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>
                        Handyman Services &rarr;
                    </h2>
                    <p>
                        General home repairs, maintenance, and small-scale projects.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Carpentry &rarr;
                    </h2>
                    <p>
                        Custom-built furniture, cabinetry, and structural carpentry services.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Drywall Repair &rarr;
                    </h2>
                    <p>
                        Filling, patching, and texturing to keep your walls in perfect condition.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Masonry Repointing &rarr;
                    </h2>
                    <p>
                        Rejuvenating your stonework for both aesthetics and structural integrity.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Deck Repair &rarr;
                    </h2>
                    <p>
                        Structural repairs and refinishing to extend the life of your outdoor space.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Home Improvement &rarr;
                    </h2>
                    <p>
                        Remodeling, additions, and other home improvement projects.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Weather Proofing
                    </h2>
                    <p>
                        Sealing gaps, insulating spaces, and other services to keep you comfortable year-round.
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        Lite Plumbing and Electrical
                    </h2>
                    <p>
                        Fixing leaks, rewiring, and general plumbing and electrical maintenance.
                    </p>
                </div>
                <button className={styles.ctaButton}>Request a quote</button>
            </div>
        </main>
    </div>
  );
}
