// src/pages/ResearchAreas/ResearchAreas.js

import React from 'react';
import styles from './ResearchAreas.module.css';

const areas = [
  'Hyperbolic Embeddings',
  'Graph-based Phonetics',
  'Curvature-aware Fusion',
  'Non-Euclidean Signal Analysis',
];

export default function ResearchAreas() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Research Areas</h1>
      <ul className={styles.list}>
        {areas.map((area) => (
          <li key={area} className={styles.item}>{area}</li>
        ))}
      </ul>
    </section>
  );
}
