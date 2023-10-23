import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const Homepage = () => {
  return (
    <>
    <div className={styles.section}>
      <Image
        className={styles.logo}
        src="/img/logo-transparent.png"
        alt="RSC Logo"
        width={400}
        height={300}
        priority />
    </div>
    <div className={styles.section}>
      <h1>
        Welcome to RSC Construction Services, LLC
      </h1>
    </div>
    <div className={styles.section}>
      <h3>
        Your trusted partner in Handyman and Carpentry Services.
      </h3>
    </div>
    <div className={styles.section}>
      <h2>
        What sets us apart
      </h2>
    </div>
    <div className={styles.section}>
      <p>
      At RSC Construction Services, LLC., we know your home is more than just a building. It's a sanctuary. That's why we dedicate ourselves to offering handyman and carpentry services that stand the test of time. Owned and led by Robb Connell, with over 30 years of industry experience, we're committed to transforming your living spaces. 
      </p>
    </div>
    <div className={styles.section}>
      <p>
        Our core values aren't just words; they're the principles we bring to every project. As your local experts in home repairs and renovations, our work is a cut above the rest, ensuring each job meets your expectations and our own high standards.
      </p>
    </div>
    <div className={styles.section}>
      <h2>
        Core Values
      </h2>
    </div>
    <div className={styles.section}>
      <ul>
        <li>
          Honesty
        </li>
        <li>
          Integrity
        </li>
        <li>
          Craftsmanship
        </li>
        <li>
          Quality
        </li>
      </ul>
    </div>
    
    </>
  )
}

export default Homepage

{/*
         <div className={styles.container}>
           <div className={styles.row}>
             <div className={styles.singleColumn}>
               <Image
                className={styles.logo}
                src="/img/logo-transparent.png"
                alt="RSC Logo"
                width={400}
                height={300}
                priority
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.singleColumn}>
              <h1>
                Welcome to RSC Construction Services, LLC
              </h1>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.singleColumn}>
              <h3>
                Your trusted partner in Handyman and Carpentry Services.
              </h3>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.card}>
                <h2>
                  Introduction
                </h2>
                <p>
                  At RSC Construction Services, LLC., we know your home is more than just a building. It's a sanctuary. That's why we dedicate ourselves to offering handyman and carpentry services that stand the test of time. Owned and led by Robb Connell, with over 30 years of industry experience, we're committed to transforming your living spaces.
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
                <h2>
                  Core Values
                </h2>
                <ul>
                  <li>
                    Honesty
                  </li>
                  <li>
                    Integrity
                  </li>
                  <li>
                    Craftsmanship
                  </li>
                  <li>
                    Quality
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.card}>
                <h2>
                  What sets us apart
                </h2>
                <p>
                  Our core values aren't just words; they're the principles we bring to every project. As your local experts in home repairs and renovations, our work is a cut above the rest, ensuring each job meets your expectations and our own high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } */}
