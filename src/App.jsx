import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ServicesPage } from './pages/Services/ServicesPage';
import { ScrollToTop } from './components/common/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;

