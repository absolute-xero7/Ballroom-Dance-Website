import React from 'react';

const SkipLink = ({ href, children }) => {
    return (
        <a
            href={href}
            className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-4 z-50 rounded-br-md focus-ring"
        >
            {children}
        </a>
    );
};

const AccessibilityProvider = ({ children }) => {
    return (
        <>
            <SkipLink href="#main-content">Skip to main content</SkipLink>
            <SkipLink href="#navigation">Skip to navigation</SkipLink>
            {children}
        </>
    );
};

export default AccessibilityProvider;
