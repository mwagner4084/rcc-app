// pages/services.tsx
import styles from "../styles/Services.module.css";

export default function AboutPage() {
    return (
        <div className={styles.body}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <i className="bi bi-dot"></i>Services<i className="bi bi-dot"></i>
                </h1>
                <div className={styles.cardSubtitle}>
                    <p className={styles.subtitle}>
                        As a veteran business-owner, I take pride in my attention to detail and commitment to excellence. I specialize in small jobs, ensuring each project receives the care and dedication it deserves.
                    </p>
                </div>
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
                            Exterior siding and trim repair, interior trim and molding installation, window and door repair.
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
                            Weather Proofing &rarr;
                        </h2>
                        <p>
                            Sealing gaps, insulating spaces, and other services to keep you comfortable year-round.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>
                            Lite Plumbing + Electrical &rarr;
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
