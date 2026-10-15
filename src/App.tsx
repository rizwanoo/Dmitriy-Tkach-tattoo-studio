import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ArtistPage from './pages/ArtistPage';
import CustomPage from './pages/CustomPage';
import ProcessPage from './pages/ProcessPage';
import BookPage from './pages/BookPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#090909] text-[#E9E4DC] flex flex-col font-sans selection:bg-[#76262B] selection:text-white">
        {/* Transparent & Floating Responsive Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<PortfolioPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/artist" element={<ArtistPage />} />
            <Route path="/custom" element={<CustomPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* Custom 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Award-Winning Cinematic Footer */}
        <Footer />

        {/* Privacy & Cookie Consent Banner */}
        <CookieBanner />
      </div>
    </Router>
  );
}
