import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SignupForm from '../components/SignupForm';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Class schedule data
  const classSchedule = [
    {
      day: 'Tuesday',
      classes: [
        { time: '8:00 PM - 9:00 PM', name: 'Beginner Waltz', location: 'Studio A', instructor: 'Roberta Chira' },
      ]
    }
  ];

  // Board members data
  const boardMembers = [
    { name: 'Roberta Chira', position: 'President', email: 'roberta.chira@mail.utoronto.ca', image: '/assets/images/team/president.jpg' },
    { name: 'Maya Kabasawa', position: 'Vice President', email: 'maya.kabasawa@mail.utoronto.ca', image: '/assets/images/team/vice-president.jpg' },
    { name: 'Prahlad Ranjit', position: 'Administrative Director', email: 'prahlad.ranjit@mail.utoronto.ca', image: '/assets/images/team/treasurer.jpg' },
    { name: 'Jennifer', position: 'Financial Director', email: 'jennifer.cong@mail.utoronto.ca', image: '/assets/images/team/secretary.jpg' }
  ];

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
              Contact & Information
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
              Get in touch with us, check our class schedule, and learn more about our organization.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Contact Us</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary rounded-full p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Address</h3>
                      <p className="text-primary-light">
                        27 King's College Cir<br />
                        University of Toronto<br />
                        Toronto, ON M5S 1A1
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary rounded-full p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Email</h3>
                      <p className="text-primary-light">
                        <a href="mailto:ballroomdance.uoft@studentorg.utoronto.ca" className="hover:text-accent">
                          ballroomdance.uoft@studentorg.utoronto.ca
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary rounded-full p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Phone</h3>
                      <p className="text-primary-light">
                        <a href="tel:+11234567890" className="hover:text-accent">
                          (123) 456-7890
                        </a>
                      </p>
                    </div>
                  </div> */}

                  {/* <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-primary rounded-full p-2 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-primary mb-1">Office Hours</h3>
                      <p className="text-primary-light">
                        Monday - Friday<br />
                        1:00 PM - 5:00 PM
                      </p>
                    </div>
                  </div> */}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-primary mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/ballroomdance_uoft/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-2 rounded-full hover:bg-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-2 rounded-full hover:bg-accent transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Class Schedule */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Class Schedule</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 bg-primary text-white text-left rounded-tl-lg">Day</th>
                        <th className="py-3 px-4 bg-primary text-white text-left">Time</th>
                        <th className="py-3 px-4 bg-primary text-white text-left">Class</th>
                        <th className="py-3 px-4 bg-primary text-white text-left">Location</th>
                        <th className="py-3 px-4 bg-primary text-white text-left rounded-tr-lg">Instructor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classSchedule.map((day, dayIndex) => (
                        <React.Fragment key={day.day}>
                          {day.classes.map((cls, clsIndex) => (
                            <tr
                              key={`${day.day}-${clsIndex}`}
                              className={clsIndex % 2 === 0 ? 'bg-secondary/30' : 'bg-white'}
                            >
                              {clsIndex === 0 ? (
                                <td
                                  className="py-3 px-4 font-medium text-primary border-b border-gray-200"
                                  rowSpan={day.classes.length}
                                >
                                  {day.day}
                                </td>
                              ) : null}
                              <td className="py-3 px-4 text-primary-light border-b border-gray-200">{cls.time}</td>
                              <td className="py-3 px-4 text-primary border-b border-gray-200 font-medium">{cls.name}</td>
                              <td className="py-3 px-4 text-primary-light border-b border-gray-200">{cls.location}</td>
                              <td className="py-3 px-4 text-primary-light border-b border-gray-200">{cls.instructor}</td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 text-primary-light text-sm">
                  <p>* Class schedule is subject to change. Please check our social media or contact us for the most up-to-date information.</p>
                  <p className="mt-2">* Drop-in fees: $15 for members, $20 for non-members per class. Class cards and semester passes available.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Board Members */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">Our Board Members</h2>
              <p className="max-w-2xl mx-auto text-primary-light">
                Meet the dedicated team that keeps our dance society running smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-serif font-bold text-primary">{member.name}</h3>
                    <p className="text-accent mb-2">{member.position}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm text-primary-light hover:text-accent"
                    >
                      {member.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Membership Form */}
          <SignupForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;