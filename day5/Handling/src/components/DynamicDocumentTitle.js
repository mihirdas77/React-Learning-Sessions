
import React, { useState, useEffect } from 'react';


const DynamicDocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = 'React App'; // Reset title on component unmount
    };
  }, [count]);

  return (
    <div>
      <h2>Dynamic Document Title</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
    </div>
  );
};

export default DynamicDocumentTitle;
