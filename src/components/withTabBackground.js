// src/withTabBackground.js
import React from 'react';

const withTabBackground = (Component, backgroundImage = 'background.jpg') => {
  return () => (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'rgba(255,255,255,0.8)',
        backgroundBlendMode: 'lighten',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '40px',
        minHeight: '100vh',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        font: "italic  bold 16px/2 cursive",
        color: "rgba(52,0,108,1)",
      }}
    >
      <Component />
    </div>
  );
};

export default withTabBackground;
