// src/pages/People/People.js

import React from 'react';
import styles from './People.module.css';

import placeholder from '../../assets/images/Don.png'; // placeholder image
import akthar from '../../assets/images/akthar.png'; // placeholder image
import girish from '../../assets/images/Girish.jpg'; // placeholder image
const members = {
  founder: [{ name: 'Orchid Chetia Phukan', role: 'Founding Head', photo: placeholder }],
  cofounders: [
    { name: 'Mohd Mujtaba Akhtar', role: 'Co-Founding Lead', photo: akthar },
    { name: 'Girish .', role: 'Co-Founding Lead', photo: girish }
  ]
  // interns: [
  //   { name: 'Bob Lee', role: 'Research Intern', photo: placeholder },
  //   { name: 'Emma Davis', role: 'Lab Assistant', photo: placeholder },
  //   { name: 'Lucas Green', role: 'Summer Intern', photo: placeholder }
  // ]
};

export default function People() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Our Team</h1>
      {['founder', 'cofounders' /*, 'interns' */].map((sectionKey) => (
        <div key={sectionKey} className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {sectionKey === 'cofounders' ? 'Co-Founders' : 'Founder'}
          </h2>
          <div className={styles.group}>
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