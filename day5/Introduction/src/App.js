
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <div className="counter">
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
