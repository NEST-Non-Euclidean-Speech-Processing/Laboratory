// src/pages/People/People.js

import React from 'react';
import styles from './People.module.css';

const members = [
  { name: 'Dr. Jane Doe', role: 'PI' },
  { name: 'John Smith', role: 'PhD Student' },
  // …etc
];

export default function People() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>People</h1>
      <ul className={styles.grid}>
        {members.map((m) => (
          <li key={m.name} className={styles.card}>
            <div className={styles.photoPlaceholder} />
            <h2 className={styles.name}>{m.name}</h2>
            <p className={styles.role}>{m.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
