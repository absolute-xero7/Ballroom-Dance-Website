import React from 'react';

const playlists = [
    { id: '2dkMbWmcP9rW17eQqja3AM', title: 'Cha Cha Cha' },
    { id: '58Izz7Wx8RKfCXc7VZDMZV', title: 'Slow Waltz' },
    { id: '7FOWO0DK2NUoHQ8zasxxHP', title: 'Vienna Waltz' },
    { id: '1Fz5cgwIBko4t094HO2NW0', title: 'Discofox' },
    { id: '697n5AYgXz92Uct5hJ5Mr9', title: 'Rumba' },
    { id: '3VluHaqEMoYQxlp1yrFYE9', title: 'Jive' },
    { id: '0sPnQc75UkyEt5hk4S7w0w', title: 'Tango' },
    { id: '0ynzMVCkYsOzFABUsPfqq0', title: 'Foxtrott' }
];

const PlaylistGallery = () => (
    <section className="my-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
            Dance to Our Playlists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map(({ id, title }) => (
                <div key={id} className="flex flex-col items-center">
                    <iframe
                        src={`https://open.spotify.com/embed/playlist/${id}`}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title={title}
                        className="rounded-lg shadow-lg"
                    />
                    <p className="mt-2 text-sm font-medium text-primary">{title}</p>
                </div>
            ))}
        </div>
    </section>
);

export default PlaylistGallery;
