// src/pages/NewsEvents/NewsEvents.js

import React from 'react';
import styles from './NewsEvents.module.css';

export default function NewsEvents() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>News & Events</h1>
      <p className={styles.text}>Stay up to date with our latest announcements, talks, and workshops.</p>
      {/* TODO: map over news items */}
    </section>
  );
}
