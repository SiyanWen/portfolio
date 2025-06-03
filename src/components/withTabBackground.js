import React, { useState, useEffect } from 'react';

const withTabBackground = (Component, backgroundImage = 'background_2.jpg') => {
  return () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // mobile threshold
      };

      handleResize(); // check on mount
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyle = {
      ...(isMobile
        ? { background: 'none' } // no background on mobile
        : {
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
          }),
      minHeight: '100vh',
      boxSizing: 'border-box',
      overflowX: 'hidden',
    };

    return (
      <div style={containerStyle}>
        <Component />
      </div>
    );
  };
};

export default withTabBackground;
