import React, { useState, useContext, useEffect } from 'react';

// COMPONENTS
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import AddFavourite from './components/AddFavourite';
import MyFavourites from './components/MyFavourites';
import Error from './components/Error';

// CONTEXT
import { MyFavsContext } from './ContextAPI/MyFavsContext';
import { CurrenciesProvider } from './ContextAPI/CurrenciesContext';

function App() {
  const [myFavsCurrencies] = useContext(MyFavsContext);
  const [addComponentDisplay, setAddComponentDisplay] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setAddComponentDisplay(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  return (
    <div className="App">
      <Navigation />
      {error ? <Error /> : null}
      <div className="container flex flex-ai-c flex-jc-c">
        {myFavsCurrencies.length === 0 && addComponentDisplay === false ? (
          <Landing setAddComponentDisplay={setAddComponentDisplay} />
        ) : null}

        <CurrenciesProvider>
          {addComponentDisplay === true ? (
            <AddFavourite
              setAddComponentDisplay={setAddComponentDisplay}
              setError={setError}
            />
          ) : null}

          {myFavsCurrencies.length !== 0 && addComponentDisplay === false ? (
            <MyFavourites setAddComponentDisplay={setAddComponentDisplay} />
          ) : null}
        </CurrenciesProvider>
      </div>
    </div>
  );
}

export default App;
