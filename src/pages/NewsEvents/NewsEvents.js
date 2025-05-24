// src/pages/NewsEvents/NewsEvents.js

import React from 'react';
import styles from './NewsEvents.module.css';

const newsItems = [
  {
    date: 'June 15, 2025',
    title: 'MiCuNet Presented at EUSIPCO 2025',
    description: 'Our team traveled to Palermo, Italy to present the MiCuNet framework and attend workshops on multimodal speech processing.'
  },
  {
    date: 'May 28, 2025',
    title: 'Interspeech 2025 Participation',
    description: 'NEST Lab members will present two papers and host a tutorial on geometry-aware audio embeddings in Shanghai, China.'
  },
  {
    date: 'July 10, 2025',
    title: 'Workshop: Non-Euclidean ML in Healthcare',
    description: 'Join our hands-on workshop on applying manifold learning to speech signals for clinical diagnostics.'
  }
];

export default function NewsEvents() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>News & Events</h1>
      <p className={styles.text}>
        Stay up to date with our latest announcements, talks, and workshops.
      </p>

      <ul className={styles.list}>
        {newsItems.map((item, idx) => (
          <li key={idx} className={styles.item}>
            <div className={styles.meta}>
              <span className={styles.date}>{item.date}</span>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}