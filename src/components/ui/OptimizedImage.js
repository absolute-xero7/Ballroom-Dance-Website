import React, { useState, useCallback } from 'react';

const OptimizedImage = ({
    src,
    alt,
    className = '',
    style = {},
    loading = 'lazy',
    fallbackSrc = '/assets/images/placeholder.jpg',
    onLoad,
    onError
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleLoad = useCallback(() => {
        setImageLoaded(true);
        if (onLoad) onLoad();
    }, [onLoad]);

    const handleError = useCallback(() => {
        setImageError(true);
        if (onError) onError();
    }, [onError]);

    const imageSrc = imageError ? fallbackSrc : src;

    return (
        <div className={`relative overflow-hidden ${className}`} style={style}>
            {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Loading...</div>
                </div>
            )}
            <img
                src={imageSrc}
                alt={alt}
                loading={loading}
                className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className}`}
                style={style}
                onLoad={handleLoad}
                onError={handleError}
            />
        </div>
    );
};

export default OptimizedImage;
