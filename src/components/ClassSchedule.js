import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fallSchedule = [
    {
        month: 'September',
        // note: 'All September lessons are free to try!',
        classes: [
            { date: 'Sep 15', name: 'Cha Cha Cha' },
            { date: 'Sep 22', name: 'Slow Waltz' },
            { date: 'Sep 29', name: 'Disco Fox' },
        ],
    },
    {
        month: 'October',
        // note: 'Membership required to attend.',
        classes: [
            { date: 'Oct 6', name: 'Cha Cha Cha' },
            { date: 'Oct 13', name: 'Cha Cha Cha' },
            { date: 'Oct 20', name: 'Jive' },
            { date: 'Oct 27', name: 'Jive' },
        ],
    },
    {
        month: 'November',
        classes: [
            { date: 'Nov 3', name: 'Slow Waltz' },
            { date: 'Nov 10', name: 'Vienna Waltz' },
            { date: 'Nov 17', name: 'Vienna Waltz' },
            { date: 'Nov 24', name: 'Grand Recap' },
        ],
    },
];

const ClassSchedule = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="bg-white rounded-lg shadow-md px-4 pt-4 pb-1 md:px-6 md:pt-4 md:pb-1">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    Fall 2025 Schedule
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center text-accent hover:text-primary transition-colors"
                >
                    <span className="mr-2 font-medium">
                        {isExpanded ? 'Hide' : 'Show'} Calendar
                    </span>
                    <svg
                        className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="space-y-6 pb-4">
                    {fallSchedule.map((monthData, index) => (
                        <motion.div
                            key={monthData.month}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-accent mb-3">{monthData.month}</h3>
                            {monthData.note && (
                                <p className="text-sm text-primary-light italic mb-3 bg-secondary/30 p-3 rounded-md">
                                    {monthData.note}
                                </p>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {monthData.classes.map((classInfo) => (
                                    <div
                                        key={classInfo.date}
                                        className="bg-secondary/20 rounded-lg p-4 border-l-4 border-accent hover:bg-secondary/30 transition-colors"
                                    >
                                        <div className="font-medium text-primary text-sm mb-1">
                                            {classInfo.date}
                                        </div>
                                        <div className="font-bold text-accent">
                                            {classInfo.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ClassSchedule;
