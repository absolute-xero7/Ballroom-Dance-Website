import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EventsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Example events data
  const allEvents = [
    {
      id: 1,
      title: "Masquerade Ball",
      date: "Nov 22, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "TBA",
      description: "Join us for a magical evening of dance, mystery, and elegance at our annual Masquerade Ball. Dress in your finest attire and don't forget your mask! The night will feature a mix of ballroom dances and snacks",
      image: "/assets/images/events/masquerade.png",
      category: "social",
      price: "$20 Members | $40 Non-members",
      registrationRequired: true,
      featured: true,
      imagePosition: "center 15%",
    }
  ];

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on category and search term
  const filteredEvents = allEvents
    .filter(event => filter === 'all' || event.category === filter)
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Show event details modal
  const showEventDetails = (event) => {
    setSelectedEvent(event);
  };

  // Close event details modal
  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
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
              Upcoming Events
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p
              className="max-w-2xl mx-auto text-lg text-primary-light mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Browse and register for our upcoming workshops, social dances, and special events.
              From beginners to advanced dancers, there's something for everyone!
            </motion.p>
          </div>

          {/* Search and Filter */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
              {/* Search */}
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Filter buttons */}
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-primary hover:bg-primary/10'
                    }`}
                  onClick={() => setFilter('all')}
                >
                  All Events
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'workshop'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-primary hover:bg-primary/10'
                    }`}
                  onClick={() => setFilter('workshop')}
                >
                  Workshops
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'social'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-primary hover:bg-primary/10'
                    }`}
                  onClick={() => setFilter('social')}
                >
                  Social Dances
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'practice'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-primary hover:bg-primary/10'
                    }`}
                  onClick={() => setFilter('practice')}
                >
                  Practice Sessions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Events grid */}
          {filteredEvents.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
                  onClick={() => showEventDetails(event)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="relative h-56">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: event.imagePosition || 'center' }}
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {event.date}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-sm font-semibold text-white uppercase tracking-wider bg-accent/80 px-2 py-1 rounded">{event.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-primary mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-primary-light mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-primary-light text-sm mb-4 h-10 overflow-hidden">{event.description}</p>
                    <button
                      className="w-full text-center font-bold text-primary hover:text-accent transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        showEventDetails(event);
                      }}
                    >
                      View Details &rarr;
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">No Events Found</h2>
              <p className="text-lg text-primary-light">
                Try adjusting your search or filter. We'll be announcing more events soon!
              </p>
            </motion.div>
          )}

          {/* Event Details Modal */}
          {selectedEvent && (
            <div className="fixed inset-0 z-50 overflow-y-auto" onClick={closeEventDetails}>
              <div className="flex items-center justify-center min-h-screen px-4">
                <div className="fixed inset-0 bg-black opacity-50 transition-opacity"></div>

                <motion.div
                  className="relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: selectedEvent.imagePosition || 'center' }}
                    />
                    <button
                      className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                      onClick={closeEventDetails}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <span className={`text-xs px-2 py-1 rounded ${selectedEvent.category === 'workshop' ? 'bg-blue-500 text-white' :
                        selectedEvent.category === 'social' ? 'bg-green-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                        {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2">{selectedEvent.title}</h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-sm bg-secondary rounded-full px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-primary">{selectedEvent.date}</span>
                      </div>

                      <div className="flex items-center text-sm bg-secondary rounded-full px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-primary">{selectedEvent.time}</span>
                      </div>

                      <div className="flex items-center text-sm bg-secondary rounded-full px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-primary">{selectedEvent.location}</span>
                      </div>

                      <div className="flex items-center text-sm bg-secondary rounded-full px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-primary">{selectedEvent.price}</span>
                      </div>
                    </div>

                    <div className="prose max-w-none text-primary-light mb-6">
                      <p>{selectedEvent.description}</p>
                    </div>

                    {selectedEvent.instructors && (
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-primary mb-2">Instructors</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedEvent.instructors.map((instructor, index) => (
                            <span
                              key={index}
                              className="bg-secondary text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {instructor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button className="btn btn-primary flex-1">
                        {selectedEvent.registrationRequired ? 'Register Now' : 'Add to Calendar'}
                      </button>
                      <button
                        className="btn btn-outline flex-1"
                        onClick={closeEventDetails}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;