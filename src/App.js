import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FineArtClasses from './pages/FineArtClasses';
import YogaClasses from './pages/YogaClasses';
import ReikiHealing from './pages/ReikiHealing';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import GalleryCategory from './pages/GalleryCategory';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fine-art-classes" element={<FineArtClasses />} />
          <Route path="/yoga-classes" element={<YogaClasses />} />
          <Route path="/reiki-healing" element={<ReikiHealing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:category" element={<GalleryCategory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
