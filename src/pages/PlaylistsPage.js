import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PlaylistGallery from '../components/PlaylistGallery';

const PlaylistsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>UofT Ballroom Dance Club | Playlists</title>
                <meta name="description" content="Listen to our curated Spotify playlists featuring music for various ballroom dances including Waltz, Cha Cha, and more." />
                <meta property="og:title" content="UofT Ballroom Dance Club | Playlists" />
                <meta property="og:description" content="Listen to our curated Spotify playlists featuring music for various ballroom dances." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ballroomdanceuoft.com/playlists" />
            </Helmet>
            <div className="pt-20 bg-secondary min-h-screen">
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <motion.h1
                                className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Our Dance Playlists
                            </motion.h1>
                            <motion.div
                                className="w-24 h-1 bg-accent mx-auto mb-6"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            />
                            <motion.p
                                className="max-w-2xl mx-auto text-lg text-primary-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Discover our curated Spotify playlists featuring the perfect music for practicing your favorite ballroom dances.
                                From elegant Waltzes to energetic Cha Cha Chas, we've got you covered!
                            </motion.p>
                        </div>

                        <PlaylistGallery />
                    </div>
                </section>
            </div>
        </>
    );
};

export default PlaylistsPage;
