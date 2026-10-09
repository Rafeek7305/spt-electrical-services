import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ServicesPage } from './pages/Services/ServicesPage';
import { AboutPage } from './pages/About/AboutPage';
import { ProjectsPage } from './pages/Projects/ProjectsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { ScrollToTop } from './components/common/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;

