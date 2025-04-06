import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Events = () => {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Beginner Waltz Workshop",
      date: "April 15, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Ballroom, Student Union",
      description: "Perfect for newcomers! Learn the basics of Waltz in this friendly workshop led by our experienced instructors.",
      image: "/assets/images/events/waltz-workshop.jpg",
      category: "workshop"
    },
    {
      id: 2,
      title: "Spring Ball",
      date: "May 10, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "Grand Ballroom, Alumni Center",
      description: "Our annual formal dance event featuring live music, showcases, and open dancing. Formal attire recommended.",
      image: "/assets/images/events/spring-ball.jpg",
      category: "social"
    },
    {
      id: 3,
      title: "Latin Dance Night",
      date: "April 22, 2025",
      time: "8:00 PM - 10:00 PM",
      location: "Dance Studio B, Recreation Center",
      description: "Spice up your week with Salsa, Cha-Cha, and Bachata! Mini-lesson followed by social dancing.",
      image: "/assets/images/events/latin-night.jpg",
      category: "social"
    },
    {
      id: 4,
      title: "Competition Team Practice",
      date: "Every Monday",
      time: "6:00 PM - 8:00 PM",
      location: "Dance Studio A, Recreation Center",
      description: "Regular practice session for our competition team. New members welcome to observe!",
      image: "/assets/images/events/competition-practice.jpg",
      category: "practice"
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredEvents = filter === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === filter);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="max-w-2xl mx-auto text-lg text-primary-light mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join us at our upcoming workshops, social dances, and special events.
            From beginners to advanced dancers, there's something for everyone!
          </motion.p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
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

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:flex h-full">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif font-bold text-primary">{event.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${event.category === 'workshop' ? 'bg-blue-100 text-blue-800' :
                          event.category === 'social' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                        }`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                    </div>
                    <p className="text-primary-light mb-4">{event.description}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex flex-col space-y-2 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-primary-light">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-primary-light">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-primary-light">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="btn btn-outline inline-flex items-center"
          >
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;