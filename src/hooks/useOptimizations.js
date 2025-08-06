import { useState, useEffect, useCallback } from 'react';

// Custom hook for managing search and filter functionality
export const useSearchAndFilter = (data, searchFields = [], initialFilter = 'all') => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState(initialFilter);
    const [filteredData, setFilteredData] = useState(data);

    const updateFilter = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);

    const updateSearchTerm = useCallback((term) => {
        setSearchTerm(term);
    }, []);

    useEffect(() => {
        let result = data;

        // Apply filter
        if (filter !== 'all') {
            result = result.filter(item => item.category === filter);
        }

        // Apply search
        if (searchTerm.trim()) {
            result = result.filter(item =>
                searchFields.some(field =>
                    item[field]?.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }

        setFilteredData(result);
    }, [data, filter, searchTerm, searchFields]);

    return {
        searchTerm,
        filter,
        filteredData,
        updateFilter,
        updateSearchTerm,
    };
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    const elementRef = useCallback((node) => {
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [threshold]);

    return [elementRef, isVisible];
};

// Custom hook for debounced search
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
