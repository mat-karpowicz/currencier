import React from 'react';

// MOCKED DATA
import currenciesArray from './helpers/mockupData';

// COMPONENTS
import Navigation from './components/Navigation';
// import Landing from './components/Landing';
// import AddFavourite from './components/AddFavourite';
import MyFavourites from './components/MyFavourites';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container flex flex-ai-c flex-jc-c">
        {/* <Landing /> */}
        {/* <AddFavourite /> */}
        <MyFavourites myFavs={currenciesArray} />
      </div>
    </div>
  );
}

export default App;
