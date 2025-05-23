// ------------------------
// src/components/SplashScreen/SplashScreen.js
// ------------------------
import React from 'react';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.square}></div>
      <div className={styles.triangle}></div>
    </div>
  );
}
