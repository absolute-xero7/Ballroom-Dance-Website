import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const boardMembers = [
        { name: 'Roberta Chira', position: 'President & Primary Instructor', image: '/assets/images/team/roberta-chira.png', imagePosition: 'center 30%' },
        { name: 'Kaan Acgay', position: 'Primary Instructor', image: '/assets/images/team/kaan-acgay.png', imagePosition: 'center 30%' },
        { name: 'Claire Stobo', position: 'VP of Events', image: '/assets/images/team/claire-stobo.png', imagePosition: 'center 30%' },
        { name: 'Mehtab Sangha', position: 'VP of Finance', image: '/assets/images/team/mehtab-sangha.png', imagePosition: 'center 30%' },
        { name: 'Akshita Rajpal', position: 'VP of Marketing & Communications', image: '/assets/images/team/akshita-rajpal.png', imagePosition: 'center 30%' },
        { name: 'Prahlad Ranjit', position: 'VP of IT Operations', image: '/assets/images/team/prahlad-ranjit.png', imagePosition: 'center 30%' },
        { name: 'Mohammad Talha Khan', position: 'Event Director', image: '/assets/images/team/mohammad-talha-khan.png', imagePosition: 'center 30%' },
        { name: 'Aditya Mukherjee', position: 'Finance Director', image: '/assets/images/team/aditya-mukherjee.png', imagePosition: 'center 30%' },
        { name: 'Chloe Ford', position: 'Marketing Director', image: '/assets/images/team/chloe-ford.png', imagePosition: 'center 30%' },
        { name: 'Hector Bligh', position: 'Marketing Director', image: '/assets/images/team/hector-bligh.png', imagePosition: 'center 30%' },
        { name: 'Nav Singh', position: 'Communication Liaison', image: '/assets/images/team/nav-singh.png', imagePosition: 'center 30%' },
        { name: 'Amora Krishna', position: 'Associate Instructor', image: '/assets/images/team/amora-krishna.png', imagePosition: 'center 30%' },
        { name: 'Tugra Canbaz', position: 'Associate Instructor', image: '/assets/images/team/tugra-canbaz.png', imagePosition: 'center 30%' }
    ];

    return (
        <>
            <Helmet>
                <title>UofT Ballroom Dance Club | About Us</title>
                <meta name="description" content="Learn about the UofT Ballroom Dance Club at the University of Toronto, our mission, and the dedicated board members behind our club." />
                <meta property="og:title" content="UofT Ballroom Dance Club | About Us" />
                <meta property="og:description" content="Learn about the UofT Ballroom Dance Club at the University of Toronto, our mission, and the dedicated board members behind our club." />
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
                                className="max-w-3xl mx-auto text-lg text-primary-light mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Founded on a shared love for dance, the UofT Ballroom Dance Club is a student-run organization dedicated to fostering a vibrant, inclusive community. We believe in the power of dance to connect people, build confidence, and create lasting memories. Our mission is to make the elegance and joy of ballroom and social dancing accessible to everyone, from absolute beginners to seasoned competitors.
                            </motion.p>
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <a
                                    href="https://sop.utoronto.ca/group/copy-of-ballroom-dance-club-2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
                                >
                                    Visit Our Official UofT Club Page
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>

                        {/* Board Members */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">Meet the Team</h2>
                                <p className="max-w-2xl mx-auto text-lg text-primary-light">
                                    Our society is led by a passionate team of students dedicated to creating the best possible dance experience for our members.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                                {boardMembers.map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col w-full sm:w-80"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                                    >
                                        <div className="relative h-72 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 flex-shrink-0">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                style={{ objectPosition: member.imagePosition }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <div className="p-6 text-center flex flex-col flex-grow">
                                            <h3 className="text-xl font-serif font-bold text-primary mb-3">{member.name}</h3>
                                            <div className="flex items-center justify-center min-h-[3rem] mb-4">
                                                <p className="text-accent font-semibold px-4 py-1.5 bg-accent/10 rounded-full text-sm leading-tight">
                                                    {member.position}
                                                </p>
                                            </div>
                                            {member.email && (
                                                <div className="mt-auto">
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-accent/10 text-sm text-primary-light hover:text-accent transition-all group/email cursor-pointer border border-transparent hover:border-accent/20"
                                                        title={member.email}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="group-hover/email:font-semibold">Contact</span>
                                                    </a>
                                                </div>
                                            )}
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
