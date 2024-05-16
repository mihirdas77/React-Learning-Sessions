
import React, { useEffect } from 'react';


const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse coordinates:', { x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>Check the console for mouse coordinates.</p>
    </div>
  );
};

export default MouseTracker;
