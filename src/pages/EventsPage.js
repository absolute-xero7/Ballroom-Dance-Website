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
      title: "Beginner Waltz Workshop",
      date: "April 15, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Ballroom, Student Union",
      description: "Perfect for newcomers! Learn the basics of Waltz in this friendly workshop led by our experienced instructors. No previous dance experience required. Partners are not necessary as we'll rotate throughout the class. Wear comfortable clothes and shoes that allow you to pivot easily (avoid rubber soles).",
      image: "/assets/images/events/waltz-workshop.jpg",
      category: "workshop",
      instructors: ["Jane Davis", "Michael Chen"],
      price: "$5 for members, $10 for non-members",
      registrationRequired: true,
      featured: true
    },
    {
      id: 2,
      title: "Spring Ball",
      date: "May 10, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "Grand Ballroom, Alumni Center",
      description: "Our annual formal dance event featuring live music, showcases, and open dancing. This elegant evening includes performances from our competition team, a three-course dinner, and dancing to live music from the University Jazz Orchestra. Formal attire recommended (suits/tuxedos, evening gowns/cocktail dresses).",
      image: "/assets/images/events/spring-ball.jpg",
      category: "social",
      price: "$30 for members, $45 for non-members",
      registrationRequired: true,
      featured: true
    },
    {
      id: 3,
      title: "Latin Dance Night",
      date: "April 22, 2025",
      time: "8:00 PM - 10:00 PM",
      location: "Dance Studio B, Recreation Center",
      description: "Spice up your week with Salsa, Cha-Cha, and Bachata! Mini-lesson followed by social dancing. This high-energy evening begins with a 30-minute beginner-friendly lesson, followed by open dancing with a mix of Latin music styles. Refreshments provided.",
      image: "/assets/images/events/latin-night.jpg",
      category: "social",
      instructors: ["Sophia Rodriguez"],
      price: "$3 for members, $5 for non-members",
      registrationRequired: false,
      featured: true
    },
    {
      id: 4,
      title: "Competition Team Practice",
      date: "Every Monday",
      time: "6:00 PM - 8:00 PM",
      location: "Dance Studio A, Recreation Center",
      description: "Regular practice session for our competition team. New members welcome to observe! See our award-winning dancers prepare for upcoming competitions. If you're interested in joining the team, this is a great opportunity to watch and learn about the commitment and skills involved.",
      image: "/assets/images/events/competition-practice.jpg",
      category: "practice",
      instructors: ["Robert Johnson", "Emma Williams"],
      price: "Free",
      registrationRequired: false,
      featured: false
    },
    {
      id: 5,
      title: "Tango Intensive Workshop",
      date: "April 29, 2025",
      time: "6:30 PM - 9:30 PM",
      location: "Dance Studio A, Recreation Center",
      description: "Take your Tango to the next level with this three-hour intensive workshop. Focusing on connection, musicality, and advanced figures, this workshop is designed for dancers with at least 6 months of Tango experience. Limited to 20 participants to ensure personalized instruction.",
      image: "/assets/images/events/tango-intensive.jpg",
      category: "workshop",
      instructors: ["Alejandro Suarez", "Guest instructor from Argentina"],
      price: "$15 for members, $25 for non-members",
      registrationRequired: true,
      featured: false
    },
    {
      id: 6,
      title: "Ballroom Social Dance",
      date: "Every Friday",
      time: "7:30 PM - 10:00 PM",
      location: "Main Ballroom, Student Union",
      description: "Weekly social dance featuring a mix of ballroom and Latin music. Perfect for practicing what you've learned in classes. The evening starts with a 30-minute beginner lesson, followed by open dancing with a mix of Waltz, Foxtrot, Tango, Cha-Cha, Rumba, and more.",
      image: "/assets/images/events/social-dance.jpg",
      category: "social",
      price: "$2 for members, $4 for non-members",
      registrationRequired: false,
      featured: false
    },
    {
      id: 7,
      title: "Swing Dance Basics",
      date: "May 5, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Dance Studio B, Recreation Center",
      description: "Learn the fundamentals of East Coast Swing in this beginner-friendly workshop. We'll cover basic steps, rhythm, and simple turns to get you dancing quickly. No experience necessary, and no partner required!",
      image: "/assets/images/events/swing-basics.jpg",
      category: "workshop",
      instructors: ["Jack Thompson", "Lily Parker"],
      price: "$5 for members, $8 for non-members",
      registrationRequired: false,
      featured: false
    },
    {
      id: 8,
      title: "Dance Technique Clinic",
      date: "April 18, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "Dance Studio A, Recreation Center",
      description: "Focus on improving your dance technique in this specialized clinic. We'll work on frame, footwork, posture, and movement quality applicable to multiple dance styles. Ideal for intermediate dancers looking to refine their skills.",
      image: "/assets/images/events/technique-clinic.jpg",
      category: "workshop",
      instructors: ["Professor Thomas Wilson", "Former National Champion"],
      price: "$10 for members, $15 for non-members",
      registrationRequired: true,
      featured: false
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => showEventDetails(event)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                    {event.featured && (
                      <div className="absolute top-0 right-0 bg-accent text-white text-xs px-2 py-1">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="text-white font-medium">{event.date}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif font-bold text-primary">{event.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${event.category === 'workshop' ? 'bg-blue-100 text-blue-800' :
                          event.category === 'social' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                        }`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-primary-light line-clamp-3 mb-4">{event.description}</p>
                    <div className="border-t border-gray-200 pt-4 mt-2">
                      <div className="flex items-center text-sm text-primary-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-primary-light mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-primary mb-2">No events found</h3>
              <p className="text-primary-light">Try adjusting your search or filter criteria</p>
            </div>
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
                      className="w-full h-full object-cover object-center"
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