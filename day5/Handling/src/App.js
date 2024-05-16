
import React from 'react';
import DataFetchingComponent from './components/DataFetchingComponent';
import MouseTracker from './components/MouseTracker';
import DynamicDocumentTitle from './components/DynamicDocumentTitle';


const App = () => {
  return (
    <div>
      <DataFetchingComponent />
      <MouseTracker />
      <DynamicDocumentTitle />
    </div>
  );
};

export default App;
