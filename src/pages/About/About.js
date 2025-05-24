// src/pages/About/About.js

import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>About N.E.S.T</h1>

      <div className={styles.section}>
        <h2 className={styles.heading}>Our Mission</h2>
        <p className={styles.text}>
          The Non-Euclidean Speech Processing Laboratory (NEST Lab) advances the theory and
          application of speech analysis within non-Euclidean geometries. By leveraging
          hyperbolic embeddings and curvature-aware architectures, we seek to reveal deeper
          structure in linguistic and paralinguistic signals.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>History & Vision</h2>
        <p className={styles.text}>
          Founded in 2025, NEST Lab is dedicated to research at the intersection of speech, health, and education. We explore diverse fields in speech processing, with an emphasis on real-world impact and interdisciplinary collaboration.
        </p>
      </div>
{/* 
      <div className={styles.section}>
        <h2 className={styles.heading}>Principal Investigator</h2>
        <div className={styles.piProfile}>
          <img
            src="/assets/images/pi-photo.jpg"
            alt="Dr. Jane Doe"
            className={styles.piPhoto}
          />
          <div>
            <h3 className={styles.piName}>Dr. Jane Doe</h3>
            <p className={styles.text}>
              Dr. Jane Doe is an Associate Professor of Computer Science specializing in
              geometric deep learning and speech signal processing. She leads the NEST Lab and
              has published extensively on hyperbolic neural networks and multimodal audio-visual
              analysis.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
