import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const PosterOficial = lazy(() => import('./pages/PosterOficial'));
const PosterPropuesta = lazy(() => import('./pages/PosterPropuesta'));
const PorrazoDelTigre = lazy(() => import('./pages/PorrazoDelTigre'));
const FullGallery = lazy(() => import('./pages/FullGallery'));
const HistoricalPosters = lazy(() => import('./pages/HistoricalPosters'));
const VideoPage = lazy(() => import('./pages/VideoPage'));

import ScrollToTop from './components/ScrollToTop';

// Loading Spinner Component
const PageLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
    <div className="w-12 h-12 border-4 border-feria-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartel-oficial" element={<PosterOficial />} />
          <Route path="/propuesta-bicentenario" element={<PosterPropuesta />} />
          <Route path="/carteles-historicos" element={<HistoricalPosters />} />
          <Route path="/porrazo-del-tigre" element={<PorrazoDelTigre />} />
          <Route path="/galeria" element={<FullGallery />} />
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
