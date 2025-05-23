// src/pages/Publications/Publications.js

import React from 'react';
import styles from './Publications.module.css';

export default function Publications() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Publications</h1>
      <p className={styles.text}>A curated list of our peer-reviewed articles, conference proceedings, and technical reports.</p>
      {/* TODO: Replace with map over real data */}
    </section>
  );
}
