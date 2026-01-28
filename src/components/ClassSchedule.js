import React from 'react';
import { motion } from 'framer-motion';

const ClassSchedule = () => {
    return (
        <div className="bg-white rounded-lg shadow-md px-4 py-6 md:px-6 md:py-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 text-center">
                Class Schedule
            </h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
            >
                <div className="text-6xl mb-4">📅</div>
                <p className="text-xl text-primary-light mb-2">
                    Schedule Coming Soon!
                </p>
                <p className="text-primary-light">
                    Stay tuned for our upcoming class schedule.
                </p>
            </motion.div>
        </div>
    );
};

export default ClassSchedule;
