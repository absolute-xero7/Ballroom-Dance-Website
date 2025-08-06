import { useEffect } from 'react';

// Performance monitoring hook
export const usePerformanceMonitor = () => {
    useEffect(() => {
        // Monitor Core Web Vitals
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'navigation') {
                    console.log('Navigation timing:', {
                        dns: entry.domainLookupEnd - entry.domainLookupStart,
                        connection: entry.connectEnd - entry.connectStart,
                        response: entry.responseEnd - entry.responseStart,
                        dom: entry.domContentLoadedEventEnd - entry.responseEnd,
                        load: entry.loadEventEnd - entry.loadEventStart,
                    });
                }

                if (entry.entryType === 'paint') {
                    console.log(`${entry.name}: ${entry.startTime}ms`);
                }

                if (entry.entryType === 'largest-contentful-paint') {
                    console.log(`LCP: ${entry.startTime}ms`);
                }
            }
        });

        try {
            observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
        } catch (e) {
            console.log('Performance Observer not supported');
        }

        return () => observer.disconnect();
    }, []);
};
