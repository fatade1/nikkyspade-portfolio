import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Digital from './pages/Digital';
import Bloom from './pages/Bloom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Primary Rebrand Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/bloom" element={<Bloom />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Backwards-Compatible Redirects */}
        <Route path="/nikkytales" element={<Navigate to="/digital" replace />} />
        <Route path="/bloom-interiors" element={<Navigate to="/bloom" replace />} />
        <Route path="/portfolio" element={<Navigate to="/work" replace />} />

        {/* Fallback 404 Redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
