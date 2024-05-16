import React, { useEffect, useState } from 'react';

const TitleUpdateComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    // Cleanup function (optional)
    return () => {
      document.title = 'React App'; // Reset title on component unmount
    };
  }, [count]);

  return (
    <div>
      <h2>Updating Document Title</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
};

export default TitleUpdateComponent;
