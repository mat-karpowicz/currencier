import React, { useState } from 'react';

// MOCKED DATA
import currenciesArray from './helpers/mockupData';

// COMPONENTS
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import AddFavourite from './components/AddFavourite';
import MyFavourites from './components/MyFavourites';

function App() {
  const [myFavs, setMyFavs] = useState([]);
  const [addComponentDisplay, setAddComponentDisplay] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <div className="container flex flex-ai-c flex-jc-c">
        {myFavs.length === 0 && addComponentDisplay === false ? (
          <Landing setAddComponentDisplay={setAddComponentDisplay} />
        ) : null}

        {addComponentDisplay === true ? (
          <AddFavourite
            setMyFavs={setMyFavs}
            setAddComponentDisplay={setAddComponentDisplay}
          />
        ) : null}

        {myFavs.length !== 0 && addComponentDisplay === false ? (
          <MyFavourites
            myFavs={currenciesArray}
            setAddComponentDisplay={setAddComponentDisplay}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
