// src/pages/Collaborators/Collaborators.js

import React from 'react';
import styles from './Collaborators.module.css';

const partners = ['University A', 'Industry Partner B', 'Lab C'];

export default function Collaborators() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Collaborators</h1>
      <ul className={styles.list}>
        {partners.map((p) => (
          <li key={p} className={styles.item}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
