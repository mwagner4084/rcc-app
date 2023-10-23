import React, { useState } from 'react';
import styles from '@/styles/Footer.module.css'

function App() {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div className={styles['footer-container']}>
                <div>
                    <small>RSC Construction Services</small>
                </div>
                <div>
                    <small>(269) 251-3967</small>
                </div>
                <div>
                    <small>&copy; {year} - All Rights Reserved</small>
                </div>
            </div>
        </footer>
    );
  };

  export default App;