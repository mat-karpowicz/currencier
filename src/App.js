import React from 'react';

// COMPONENTS
import Navigation from './components/Navigation';
// import Landing from './components/Landing';
import AddFavourite from './components/AddFavourite';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container flex flex-ai-c flex-jc-c">
        {/* <Landing /> */}
        <AddFavourite />
      </div>
    </div>
  );
}

export default App;
