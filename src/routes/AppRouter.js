// ------------------------
// src/routes/AppRouter.js
// ------------------------
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import ResearchAreas from '../pages/ResearchAreas/ResearchAreas';
import Publications from '../pages/Publications/Publications';
import People from '../pages/People/People';
import NewsEvents from '../pages/NewsEvents/NewsEvents';
import Collaborators from '../pages/Collaborators/Collaborators';
import JoinUs from '../pages/JoinUs/JoinUs';
import Contact from '../pages/Contact/Contact';


export default function AppRouter() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<ResearchAreas />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/people" element={<People />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
