import React, { useEffect } from 'react';

const EventListenerComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolled!');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div style={{ height: '2000px' }}>Scroll me! to see console log</div>;
};

export default EventListenerComponent;
