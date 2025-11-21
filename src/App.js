import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import PlaylistsPage from './pages/PlaylistsPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/index.css';

function App() {
  // Remove artificial loading screen for better performance

  return (
    <ErrorBoundary>
      <div className="App min-h-screen flex flex-col">
        {/* Event Announcement Banner */}
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-accent to-accent-dark text-white py-2 px-4 text-center text-sm font-medium z-[60]">
          <Link to="/events?event=1" className="inline-flex items-center gap-2 hover:underline">
            <span>🎭</span>
            <span className="hidden sm:inline">UofT Masquerade Ball 2025 - December 5th</span>
            <span className="sm:hidden">Masquerade Ball - Dec 5</span>
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs">View Details →</span>
          </Link>
        </div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/playlists" element={<PlaylistsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;