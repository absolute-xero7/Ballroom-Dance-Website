import React from 'react';
import { Routes, Route } from 'react-router-dom';
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