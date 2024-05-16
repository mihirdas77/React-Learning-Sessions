import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Timer: {timer}</h2>
    </div>
  );
};

export default TimerComponent;
