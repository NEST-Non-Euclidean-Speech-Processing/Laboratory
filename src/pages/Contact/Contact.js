// src/pages/Contact/Contact.js

import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.css';

import janePhoto from '../../assets/images/NEST-logo.jpg';
import johnPhoto from '../../assets/images/NEST-logo.jpg';
import alicePhoto from '../../assets/images/NEST-logo.jpg';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Lab Contacts</h1>
      <div className={styles.layout}>
        {/* Top Center Person */}
        <figure className={`${styles.person} ${styles.top}`}>
          <img src={johnPhoto} alt="Dr. John Smith" className={styles.photo} />
          <figcaption className={styles.name}>Orchid chetia phukan</figcaption>
          <div className={styles.links}>
            <a href="mailto:john.smith@nestlab.edu" title="Email John"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/john-smith" target="_blank" rel="noopener noreferrer" title="John's LinkedIn"><FaLinkedin /></a>
          </div>
        </figure>

        {/* Bottom Left Person */}
        <figure className={`${styles.person} ${styles.left}`}>
          <img src={janePhoto} alt="Dr. Jane Doe" className={styles.photo} />
          <figcaption className={styles.name}>Akthar</figcaption>
          <div className={styles.links}>
            <a href="mailto:jane.doe@nestlab.edu" title="Email Jane"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/jane-doe" target="_blank" rel="noopener noreferrer" title="Jane's LinkedIn"><FaLinkedin /></a>
          </div>
        </figure>

        {/* Bottom Right Person */}
        <figure className={`${styles.person} ${styles.right}`}>
          <img src={alicePhoto} alt="Ms. Alice Brown" className={styles.photo} />
          <figcaption className={styles.name}>Girish .</figcaption>
          <div className={styles.links}>
            <a href="mailto:alice.brown@nestlab.edu" title="Email Alice"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/alice-brown" target="_blank" rel="noopener noreferrer" title="Alice's LinkedIn"><FaLinkedin /></a>
          </div>
        </figure>
      </div>
    </section>
  );
}