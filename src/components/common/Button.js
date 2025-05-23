// ------------------------
// src/components/common/Button.js
// ------------------------
import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 rounded-lg shadow hover:shadow-md transition">
      {children}
    </button>
  );
}
