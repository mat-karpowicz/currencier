import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Currency from './Currency';

function MyFavourites({ myFavs }) {
  MyFavourites.propTypes = {
    myFavs: PropTypes.arrayOf(Object).isRequired,
  };

  return (
    <div className="favs-container flex flex-col">
      <h1 className="fav-title">My favourites:</h1>
      <button type="button" className="btn remove-all-btn">
        REMOVE ALL
      </button>
      <div className="currency-container flex flex-jc-c">
        {myFavs.map(({ currency, mid, code }) => {
          return (
            <Currency
              currency={currency}
              mid={mid}
              code={code}
              key={currency.code}
              value={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyFavourites;
