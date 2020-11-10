import React from 'react';

// COMPONENTS
import Navigation from './components/Navigation';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container flex">
        <Landing />
      </div>
    </div>
  );
}

export default App;
