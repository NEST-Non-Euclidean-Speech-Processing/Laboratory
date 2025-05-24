// src/pages/Home/Home.js

import React from 'react';
import styles from './Home.module.css';
import logo from '../../assets/images/NEST-logo.jpg';
import project1 from '../../assets/images/NEST-logo.jpg';
import project2 from '../../assets/images/NEST-logo.jpg';
import project3 from '../../assets/images/NEST-logo.jpg';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.container}>
        {/* Header / Hero */}
        <header className={styles.header}>
          <img src={logo} alt="NEST Lab Logo" className={styles.logo} />
          <h1 className={styles.title}>Exploring Non-Euclidean Geometry in Speech</h1>
          <p className={styles.subtitle}>
            Innovating at the intersection of geometry and audio to build
            robust, next-generation speech solutions.
          </p>
          <a href="/join" className={styles.ctaButton}>Join Our Team</a>
        </header>

        {/* Features / Mission Cards */}
        <section className={styles.features}>
          <article className={styles.card}>
            <h3>Geometry-Aware Models</h3>
            <p>
              Leverage hyperbolic and spherical spaces to capture intrinsic
              data structure for improved representations.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Multimodal Fusion</h3>
            <p>
              Integrate speech with vision and text for holistic,
              context-aware AI systems.
            </p>
          </article>
          <article className={styles.card}>
            <h3>Open Collaboration</h3>
            <p>
              Open-source toolkits, datasets, and workshops to foster
              community-driven progress.
            </p>
          </article>
        </section>

        {/* Gallery / Highlights */}
        <section className={styles.gallery}>
          <h2>Recent Highlights</h2>
          <div className={styles.grid}>
            {[project1, project2, project3].map((src, idx) => (
              <figure key={idx} className={styles.cardImage}>
                <img src={src} alt={`Highlight ${idx+1}`} />
                <figcaption>Project {idx + 1}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Latest News */}
        <section className={styles.news}>
          <h2>Latest News & Events</h2>
          <ul>
            <li>
              <strong>EMNLP 2025 Presentation:</strong> Keynote on
              geometry-driven audio embeddings — June 15, 2025
            </li>
            <li>
              <strong>Workshop:</strong> Non-Euclidean ML in Audio — July 10,
              2025
            </li>
            <li>
              <strong>Call for Collaborators:</strong> Seeking partners for
              cross-modal research projects.
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <footer className={styles.footer}>
          <p>Ready to push the boundaries of speech processing?</p>
          <a href="/contact" className={styles.ctaButton}>Contact Us</a>
        </footer>
      </div>
    </main>
  );
}