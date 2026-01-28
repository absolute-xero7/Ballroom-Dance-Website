import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import ClassSchedule from '../components/ClassSchedule';
import OptimizedImage from '../components/ui/OptimizedImage';
import { useSearchAndFilter, useDebounce } from '../hooks/useOptimizations';

const EventsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Upcoming events data
  const allEvents = [];

  // Past events data
  const pastEvents = [];

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
    // Clear the event query param when closing
    if (searchParams.has('event')) {
      searchParams.delete('event');
      setSearchParams(searchParams);
    }
  };

  // Auto-open event modal if event query param is present
  useEffect(() => {
    const eventId = searchParams.get('event');
    if (eventId) {
      const event = allEvents.find(e => e.id === parseInt(eventId));
      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [searchParams]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedEvent) {
        closeEventDetails();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedEvent]);

  return (
    <>
      <Helmet>
        <title>UofT Ballroom Dance Club | Events</title>
        <meta name="description" content="See upcoming ballroom dance events, workshops, and socials at the University of Toronto." />
        <meta property="og:title" content="UofT Ballroom Dance Club | Events" />
        <meta property="og:description" content="See upcoming ballroom dance events, workshops, and socials at the University of Toronto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ballroomdanceuoft.com/events" />
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

            {/* Class Schedule */}
            <div className="mb-16">
              <ClassSchedule />
            </div>

            {/* Search - simplified since we have few events */}
            {allEvents.length > 3 && (
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex justify-center">
                  <div className="w-full md:w-1/2">
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
                </div>
              </motion.div>
            )}

            {/* Upcoming Events grid */}
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
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">No Upcoming Events</h2>
                <p className="text-lg text-primary-light mb-4">
                  Check back soon for upcoming events! In the meantime, see our class schedule above.
                </p>
              </motion.div>
            )}

            {/* Past Events Section */}
            {pastEvents.length > 0 && (
              <motion.div
                className="mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">Past Events</h2>
                  <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                  <p className="max-w-2xl mx-auto text-lg text-primary-light">
                    Relive the memories from our recent events
                  </p>
                </div>

                {pastEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {/* Event Image Header */}
                    <div className="relative h-64 md:h-80">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: event.imagePosition || 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <span className="text-sm font-semibold text-white uppercase tracking-wider bg-accent/80 px-3 py-1 rounded mb-3 inline-block">
                          {event.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-white/80 text-sm">{event.date} | {event.location}</p>
                      </div>
                    </div>

                    {/* Thank You / Recap Content */}
                    {event.recap && (
                      <div className="p-6 md:p-10">
                        <h4 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 text-center">
                          {event.recap.title}
                        </h4>

                        <p className="text-primary-light text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                          {event.recap.message}
                        </p>

                        {/* Event Highlights */}
                        <div className="bg-secondary rounded-xl p-6 mb-8">
                          <h5 className="text-lg font-semibold text-primary mb-4 text-center">Event Highlights</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {event.recap.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-primary-light">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Photo Gallery Link */}
                        <div className="text-center">
                          <a
                            href={event.recap.galleryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            View Event Photos
                          </a>
                          <p className="text-primary-light text-sm mt-4">
                            View, download, and share photos from the event on PhotoCircle
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
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

                      </div>

                      <div className="prose max-w-none text-primary-light mb-6">
                        <p>{selectedEvent.description}</p>
                      </div>

                      {/* Ticket Pricing */}
                      {selectedEvent.tickets && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-primary mb-3">Ticket Pricing</h3>
                          <div className="bg-secondary rounded-lg p-4 space-y-3">
                            {selectedEvent.tickets.map((ticket, index) => (
                              <div key={index} className="flex justify-between items-center">
                                <div>
                                  <span className="font-medium text-primary">{ticket.name}</span>
                                  {ticket.note && (
                                    <span className="ml-2 text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                      {ticket.note}
                                    </span>
                                  )}
                                </div>
                                <span className="font-bold text-accent">{ticket.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

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
                        {selectedEvent.ticketLink ? (
                          <a
                            href={selectedEvent.ticketLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary flex-1 inline-flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                            </svg>
                            Get Tickets
                          </a>
                        ) : (
                          <button className="btn btn-primary flex-1">
                            {selectedEvent.registrationRequired ? 'Register Now' : 'Add to Calendar'}
                          </button>
                        )}
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
    </>
  );
};

export default EventsPage;