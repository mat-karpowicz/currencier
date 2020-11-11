import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Currency from './Currency';

// CONTEXT
import { MyFavsContext } from '../ContextAPI/MyFavsContext';

function MyFavourites({ setAddComponentDisplay }) {
  const [myFavsCurrencies, setMyFavsCurrencies] = useContext(MyFavsContext);

  const removeAllFavs = () => {
    setMyFavsCurrencies([]);
  };

  return (
    <div className="favs-container flex flex-col">
      <h1 className="fav-title">My favourites:</h1>
      <button
        type="button"
        className="btn fav-btn add-more-btn"
        onClick={() => setAddComponentDisplay(true)}
      >
        add more
      </button>
      <button
        type="button"
        className="btn fav-btn remove-all-btn"
        onClick={() => removeAllFavs()}
      >
        remove all
      </button>
      <div className="currency-container flex flex-jc-c">
        {myFavsCurrencies.map(({ currency, mid, code }) => {
          return (
            <Currency
              currency={currency}
              mid={mid}
              code={code}
              key={code}
              btnType={false}
            />
          );
        })}
      </div>
    </div>
  );
}

MyFavourites.propTypes = {
  setAddComponentDisplay: PropTypes.func.isRequired,
};

export default MyFavourites;
