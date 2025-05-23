// src/pages/Contact/Contact.js

import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending…');
    // TODO: integrate with your API endpoint
    try {
      // await api.post('/contact', form);
      setStatus('Thank you! We’ll be in touch soon.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Oops—something went wrong.');
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.text}>
        Questions? Collaboration inquiries? Please complete the form below, and we’ll respond promptly.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.label}>
          Message
          <textarea
            className={styles.textarea}
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>

      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
}
