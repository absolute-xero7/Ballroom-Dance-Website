// Centralized events data for better maintainability
export const eventsData = [
    {
        id: 1,
        title: "Masquerade Ball",
        date: "Dec 17, 2025",
        time: "6:00 PM - 9:00 PM",
        location: "TBA",
        description: "Join us for a magical evening of dance, mystery, and elegance at our annual Masquerade Ball. Dress in your finest attire and don't forget your mask! The night will feature a mix of ballroom dances and snacks",
        image: "/assets/images/events/masquerade.png",
        category: "social",
        price: "$20 Members | $40 Non-members",
        registrationRequired: true,
        featured: true,
        instructors: ["Prof. Elena Rodriguez", "Master David Chen"],
        imagePosition: "center 30%",
    },
    {
        id: 2,
        title: "Beginner's Waltz Workshop",
        date: "Jan 20, 2026",
        time: "2:00 PM - 4:00 PM",
        location: "Dance Studio A, Recreation Center",
        description: "Perfect for newcomers! Learn the basic steps of the elegant Waltz in this comprehensive 2-hour workshop.",
        image: "/assets/images/events/waltz-workshop.jpg",
        category: "workshop",
        price: "$15 Members | $25 Non-members",
        registrationRequired: true,
        featured: false,
        instructors: ["Sarah Johnson"],
        imagePosition: "center 40%",
    },
    {
        id: 3,
        title: "Latin Dance Night",
        date: "Feb 8, 2026",
        time: "7:00 PM - 10:00 PM",
        location: "Main Ballroom, Student Center",
        description: "Spice up your winter with hot Latin rhythms! Featuring Salsa, Cha-Cha, and Bachata with live music.",
        image: "/assets/images/events/latin-night.jpg",
        category: "social",
        price: "$10 Members | $20 Non-members",
        registrationRequired: false,
        featured: true,
        instructors: ["Carlos Martinez", "Isabella Santos"],
        imagePosition: "center 25%",
    },
    {
        id: 4,
        title: "Competition Team Tryouts",
        date: "Feb 15, 2026",
        time: "1:00 PM - 5:00 PM",
        location: "Dance Studio A & B",
        description: "Join our competitive team! Open auditions for Standard and Latin divisions. Previous experience recommended.",
        image: "/assets/images/events/competition-tryouts.jpg",
        category: "practice",
        price: "Free for Members",
        registrationRequired: true,
        featured: false,
        instructors: ["Competition Team Coaches"],
        imagePosition: "center 35%",
    },
    {
        id: 5,
        title: "Valentine's Day Social",
        date: "Feb 14, 2026",
        time: "6:00 PM - 9:00 PM",
        location: "Grand Ballroom, Student Union",
        description: "Celebrate love through dance! Romantic music, rose ceremony, and special couples' dances.",
        image: "/assets/images/events/valentines-social.jpg",
        category: "social",
        price: "$25 per couple | $15 single",
        registrationRequired: true,
        featured: true,
        instructors: ["Elena Rodriguez", "Michael Thompson"],
        imagePosition: "center 20%",
    }
];

export const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'social', name: 'Social Dances' },
    { id: 'practice', name: 'Practice Sessions' },
    { id: 'competition', name: 'Competitions' }
];

// Get featured events
export const getFeaturedEvents = () => eventsData.filter(event => event.featured);

// Get upcoming events (next 30 days)
export const getUpcomingEvents = () => {
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));

    return eventsData.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= now && eventDate <= thirtyDaysFromNow;
    });
};
