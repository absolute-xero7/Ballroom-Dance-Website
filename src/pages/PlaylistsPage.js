import React from 'react';
import PlaylistGallery from '../components/PlaylistGallery';

const PlaylistsPage = () => (
    <section className="container mx-auto py-8 px-4 pt-24">
        <h1 className="text-3xl font-bold mb-6 text-primary">Our Spotify Playlists</h1>
        <PlaylistGallery />
    </section>
);

export default PlaylistsPage;
