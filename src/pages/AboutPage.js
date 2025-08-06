import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const boardMembers = [
        { name: 'Roberta Chira', position: 'President', email: 'roberta.chira@mail.utoronto.ca', image: '/assets/images/team/roberta.jpg', imagePosition: 'center 30%' },
        { name: 'Maya Kabasawa', position: 'Vice President', email: 'maya.kabasawa@mail.utoronto.ca', image: '/assets/images/team/maya.jpeg', imagePosition: 'center 45%' },
        { name: 'Akshita Rajpal', position: 'Communication Liaison', email: 'akshita.rajpal@mail.utoronto.ca', image: '/assets/images/team/akshita.jpg', imagePosition: 'center 40%' },
        { name: 'Jennifer Cong', position: 'Financial Director', email: 'jennifer.cong@mail.utoronto.ca', image: '/assets/images/team/jennifer.jpg', imagePosition: 'center 40%' },
        { name: 'Prahlad Ranjit', position: 'Administrative Director', email: 'prahlad.ranjit@mail.utoronto.ca', image: '/assets/images/team/prahlad.jpg', imagePosition: 'center 35%' }
    ];

    return (
        <>
            <Helmet>
                <title>Ballroom Dance Society | About Us</title>
                <meta name="description" content="Learn about the Ballroom Dance Society at the University of Toronto, our mission, and the dedicated board members behind our club." />
                <meta property="og:title" content="Ballroom Dance Society | About Us" />
                <meta property="og:description" content="Learn about the Ballroom Dance Society at the University of Toronto, our mission, and the dedicated board members behind our club." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ballroomdanceuoft.com/about" />
            </Helmet>
            <div className="pt-20 bg-secondary min-h-screen">
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <motion.h1
                                className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                About Our Society
                            </motion.h1>
                            <motion.div
                                className="w-24 h-1 bg-accent mx-auto mb-6"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            />
                            <motion.p
                                className="max-w-3xl mx-auto text-lg text-primary-light"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Founded on a shared love for dance, the Ballroom Dance Society is a student-run organization dedicated to fostering a vibrant, inclusive community. We believe in the power of dance to connect people, build confidence, and create lasting memories. Our mission is to make the elegance and joy of ballroom and social dancing accessible to everyone, from absolute beginners to seasoned competitors.
                            </motion.p>
                        </div>

                        {/* Board Members */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">Meet the Team</h2>
                                <p className="max-w-2xl mx-auto text-primary-light">
                                    Our society is led by a passionate team of students dedicated to creating the best possible dance experience for our members.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8">
                                {boardMembers.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden text-center w-72 transform hover:scale-105 transition-transform duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                                    >
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                                style={{ objectPosition: member.imagePosition }}
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-xl font-serif font-bold text-primary">{member.name}</h3>
                                            <p className="text-accent mb-3">{member.position}</p>
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="text-sm text-primary-light hover:text-accent transition-colors"
                                            >
                                                {member.email}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutPage;
