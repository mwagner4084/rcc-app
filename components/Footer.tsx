import React, { useState } from "react";
import styles from "@/styles/Footer.module.css"

function App() {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div>
                    <small>&copy; RSC Construction Services, {year}.</small>
                </div>
                <div>
                    <small>(269) 251-3967</small>
                </div>
                <div>
                    <small>All Rights Reserved.</small>
                </div>
            </div>
        </footer>
    );
  };

  export default App;