// src/pages/Home/Home.js

import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome to NEST Lab</h1>
      <p className={styles.text}>
        Driving innovation in non-Euclidean speech processing through geometry-aware models and algorithms.
      </p>
    </section>
  );
}
