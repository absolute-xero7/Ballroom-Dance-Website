// Centralized schedule data for better maintainability
export const getCurrentSemesterSchedule = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-11

    // Determine semester based on current month
    if (currentMonth >= 0 && currentMonth <= 4) {
        return winterSchedule;
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        return summerSchedule;
    } else {
        return fallSchedule;
    }
};

export const getCurrentSemesterName = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    if (currentMonth >= 0 && currentMonth <= 4) {
        return `Winter ${currentYear} Schedule`;
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        return `Summer ${currentYear} Schedule`;
    } else {
        return `Fall ${currentYear} Schedule`;
    }
};

const fallSchedule = [
    {
        month: 'September',
        note: 'All September lessons are free to try!',
        classes: [
            { date: 'Sep 14', name: 'Cha Cha Cha' },
            { date: 'Sep 21', name: 'Slow Waltz' },
            { date: 'Sep 28', name: 'Disco Fox' },
        ],
    },
    {
        month: 'October',
        note: 'Membership required to attend.',
        classes: [
            { date: 'Oct 5', name: 'Cha Cha Cha' },
            { date: 'Oct 12', name: 'Cha Cha Cha' },
            { date: 'Oct 19', name: 'Jive' },
            { date: 'Oct 26', name: 'Jive' },
        ],
    },
    {
        month: 'November',
        classes: [
            { date: 'Nov 2', name: 'Slow Waltz' },
            { date: 'Nov 9', name: 'Vienna Waltz' },
            { date: 'Nov 16', name: 'Vienna Waltz' },
            { date: 'Nov 23', name: 'Grand Recap' },
        ],
    },
];

const winterSchedule = [
    {
        month: 'January',
        note: 'Welcome back! All January lessons are free for new members.',
        classes: [
            { date: 'Jan 11', name: 'Foxtrot Basics' },
            { date: 'Jan 18', name: 'Rumba Introduction' },
            { date: 'Jan 25', name: 'Waltz Fundamentals' },
        ],
    },
    {
        month: 'February',
        note: 'Valentine\'s themed dances!',
        classes: [
            { date: 'Feb 1', name: 'Romantic Rumba' },
            { date: 'Feb 8', name: 'Passionate Tango' },
            { date: 'Feb 15', name: 'Valentine\'s Social Dance' },
            { date: 'Feb 22', name: 'Swing Fundamentals' },
        ],
    },
    {
        month: 'March',
        classes: [
            { date: 'Mar 1', name: 'Quickstep Basics' },
            { date: 'Mar 8', name: 'Samba Introduction' },
            { date: 'Mar 15', name: 'Showcase Preparation' },
            { date: 'Mar 22', name: 'Spring Showcase' },
        ],
    },
];

const summerSchedule = [
    {
        month: 'June',
        note: 'Summer intensive program begins!',
        classes: [
            { date: 'Jun 7', name: 'Latin Intensive' },
            { date: 'Jun 14', name: 'Standard Workshop' },
            { date: 'Jun 21', name: 'Social Dance Night' },
            { date: 'Jun 28', name: 'Competition Prep' },
        ],
    },
    {
        month: 'July',
        classes: [
            { date: 'Jul 5', name: 'Advanced Technique' },
            { date: 'Jul 12', name: 'Partner Connection' },
            { date: 'Jul 19', name: 'Performance Training' },
            { date: 'Jul 26', name: 'Summer Social' },
        ],
    },
];
