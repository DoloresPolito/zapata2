import React from 'react';
import styles from './style.module.css';

const LayeredSections = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.section1}`}>
        <h1>Section 1</h1>
      </div>
      <div className={`${styles.section} ${styles.section2}`}>
        <h1>Section 2</h1>
      </div>
      <div className={`${styles.section} ${styles.section3}`}>
        <h1>Section 3</h1>
      </div>
      <div className={`${styles.section} ${styles.section4}`}>
        <h1>Section 4</h1>
      </div>
    </div>
  );
};

export default LayeredSections;