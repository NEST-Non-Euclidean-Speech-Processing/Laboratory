// People.js - dynamically renders team sections with placeholder images
// Ensure you replace placeholder with actual member photos
import React from 'react';
import styles from './People.module.css';

import placeholder from '../../assets/images/NEST-logo.jpg'; // placeholder image

const members = {
  founder: [{ name: 'Dr. Jane Doe', role: 'Founder & PI', photo: placeholder }],
  cofounders: [
    { name: 'John Smith', role: 'Co-Founder', photo: placeholder },
    { name: 'Alice Brown', role: 'Co-Founder', photo: placeholder }
  ],
  interns: [
    { name: 'Bob Lee', role: 'Research Intern', photo: placeholder },
    { name: 'Emma Davis', role: 'Lab Assistant', photo: placeholder },
    { name: 'Lucas Green', role: 'Summer Intern', photo: placeholder }
  ]
};

export default function People() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Our Team</h1>
      {['founder', 'cofounders', 'interns'].map((sectionKey) => (
        <div key={sectionKey} className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {sectionKey === 'interns' ? 'Interns & Assistants' : sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
          </h2>
          <div className={sectionKey === 'interns' ? `${styles.group} ${styles.internGroup}` : styles.group}>
            {members[sectionKey].map((m) => (
              <figure key={m.name} className={styles.card}>
                <img src={m.photo} alt={m.name} className={styles.photo} />
                <figcaption className={styles.name}>{m.name}</figcaption>
                <p className={styles.role}>{m.role}</p>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
