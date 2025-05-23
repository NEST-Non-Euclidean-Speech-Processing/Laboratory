// src/pages/JoinUs/JoinUs.js

import React from 'react';
import styles from './JoinUs.module.css';
import Button from '../../components/common/Button';

const positions = [
  {
    title: 'PhD Student in Geometric Deep Learning',
    description: 'Fully funded position to work on hyperbolic neural architectures for speech processing.',
  },
  {
    title: 'M.Tech Intern',
    description: '6-month internship focusing on curvature-aware feature extraction.',
  },
];

export default function JoinUs() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Join Us</h1>
      <p className={styles.text}>
        NEST Lab is recruiting motivated researchers. Explore our open positions below,
        and reach out if you’d like to contribute to cutting-edge non-Euclidean speech research.
      </p>

      <ul className={styles.positions}>
        {positions.map((pos, i) => (
          <li key={i} className={styles.positionCard}>
            <h2 className={styles.posTitle}>{pos.title}</h2>
            <p className={styles.posDesc}>{pos.description}</p>
            <Button onClick={() => window.location.href = '/contact'}>
              Apply Now
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
