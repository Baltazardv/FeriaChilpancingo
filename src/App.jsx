import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PosterOficial from './pages/PosterOficial';
import PosterPropuesta from './pages/PosterPropuesta';
import FullGallery from './pages/FullGallery';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartel-oficial" element={<PosterOficial />} />
        <Route path="/propuesta-bicentenario" element={<PosterPropuesta />} />
        <Route path="/galeria" element={<FullGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
