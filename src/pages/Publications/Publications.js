// src/pages/Publications/Publications.js

import React from 'react';
import styles from './Publications.module.css';
import { FaGithub } from 'react-icons/fa';

// Example data; replace with real publications
const publications = [
  {
    title: 'MiCuNetwork: Fine-Grained Cross-Lingual Traceback of Emotion and Manipulation Sources in Synthetic Speech',
    venue: 'ECAI 2025',
    link: 'https://doi.org/10.1000/ecai.2025.001',
    github: 'https://github.com/NEST-Lab/MiCuNet'
  },
  {
    title: 'Audio Deepfake Detection Using Transfer Learning',
    venue: 'INTERSPEECH 2025',
    link: 'https://doi.org/10.1000/interspeech.2025.123',
    github: 'https://github.com/NEST-Lab/DeepfakeDetection'
  },
  {
    title: 'CodecParsing: Neural Audio Codec Source Parsing',
    venue: 'EMNLP 2025',
    link: 'https://doi.org/10.1000/emnlp.2025.045',
    github: 'https://github.com/NEST-Lab/CodecParsing'
  }
];

export default function Publications() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Publications</h1>
      <p className={styles.text}>
        A curated list of our peer-reviewed articles, conference proceedings, and technical reports.
      </p>

      <ul className={styles.list}>
        {publications.map((pub, idx) => (
          <li key={idx} className={styles.item}>
            <div className={styles.meta}>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.paperLink}>
                {pub.title}
              </a>
              <span className={styles.venue}>{pub.venue}</span>
            </div>
            {pub.github && (
              <a href={pub.github} target="_blank" rel="noopener noreferrer" className={styles.github}>
                <FaGithub />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
