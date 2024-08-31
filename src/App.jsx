import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
