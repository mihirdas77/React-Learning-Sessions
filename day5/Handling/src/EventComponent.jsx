import React, { useEffect } from 'react';

const EventComponent = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse X:', event.clientX);
      // You can update component state here if needed
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Move your mouse to see the X coordinate logged to the console.</p>
    </div>
  );
};

export default EventComponent;
