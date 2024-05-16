import React from 'react';
import './App.css';
import TimerComponent from './TimerComponent';
import EventListenerComponent from './EventListenerComponent';

function App() {
  return (
    <div className="App">
      <h1>React useEffect Cleanup Example</h1>
      <TimerComponent />
      <EventListenerComponent />
    </div>
  );
}

export default App;
