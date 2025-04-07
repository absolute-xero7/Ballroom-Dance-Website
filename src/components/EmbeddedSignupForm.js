import React from 'react';
import { motion } from 'framer-motion';

const EmbeddedSignupForm = () => {
    return (
        <section id="signup" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Join Our Dance Society
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-accent mx-auto mb-6"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                        <motion.p
                            className="text-lg text-primary-light mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Ready to begin your dance journey? Sign up below and become part of our vibrant community!
                        </motion.p>
                    </div>

                    <motion.div
                        className="bg-secondary rounded-lg shadow-md p-6 md:p-8 overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full flex justify-center">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSd05ibTnjPxDtkrp0h8nHMtBLyCzsMQhw5n2RBTLdd9lVq3ZQ/viewform?embedded=true"
                                width="100%"
                                height="1200"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                title="Ballroom Dance Society Registration Form"
                                className="max-w-full"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EmbeddedSignupForm;