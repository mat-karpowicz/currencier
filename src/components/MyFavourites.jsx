import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Currency from './Currency';

function MyFavourites({ myFavs, setAddComponentDisplay }) {
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
      <button type="button" className="btn fav-btn remove-all-btn">
        remove all
      </button>
      <div className="currency-container flex flex-jc-c">
        {myFavs.map(({ currency, mid, code }) => {
          return (
            <Currency
              currency={currency}
              mid={mid}
              code={code}
              key={currency.code}
              btnType={false}
            />
          );
        })}
      </div>
    </div>
  );
}

MyFavourites.propTypes = {
  myFavs: PropTypes.arrayOf(Object).isRequired,
  setAddComponentDisplay: PropTypes.func.isRequired,
};

export default MyFavourites;
