// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research Areas' },
  { to: '/publications', label: 'Publications' },
  { to: '/people', label: 'People' },
  { to: '/news', label: 'News & Events' },
  { to: '/collaborators', label: 'Collaborators' },
  { to: '/join', label: 'Join Us' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>NEST Lab</div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.bar} ${isOpen ? styles.barActive1 : ''}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barActive2 : ''}`} />
        <span className={`${styles.bar} ${isOpen ? styles.barActive3 : ''}`} />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}>
        {links.map(link => (
          <li key={link.to} onClick={() => setIsOpen(false)}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? styles.active : '')}
              end
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}