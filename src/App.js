import React, { useState, useContext } from 'react';

// COMPONENTS
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import AddFavourite from './components/AddFavourite';
import MyFavourites from './components/MyFavourites';

// CONTEXT
import { MyFavsContext } from './ContextAPI/MyFavsContext';

function App() {
  const [myFavsCurrencies] = useContext(MyFavsContext);
  const [addComponentDisplay, setAddComponentDisplay] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <div className="container flex flex-ai-c flex-jc-c">
        {myFavsCurrencies.length === 0 && addComponentDisplay === false ? (
          <Landing setAddComponentDisplay={setAddComponentDisplay} />
        ) : null}

        {addComponentDisplay === true ? (
          <AddFavourite setAddComponentDisplay={setAddComponentDisplay} />
        ) : null}

        {myFavsCurrencies.length !== 0 && addComponentDisplay === false ? (
          <MyFavourites setAddComponentDisplay={setAddComponentDisplay} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
