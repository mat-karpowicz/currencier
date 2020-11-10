import React, { useState } from 'react';

// COMPONENTS
import Currency from './Currency';

// IMPORT MOCKUP DATA
import currenciesArray from '../helpers/mockupData';

function AddFavourite() {
  // eslint-disable-next-line
  const [currencies, setCurrencies] = useState(currenciesArray);
  const [displayCurrencies, setDisplayCurrencies] = useState(currencies);

  const search = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredCurrencies = currencies.filter((el) => {
      return (
        el.currency.toLowerCase().indexOf(searchQuery) !== -1 ||
        el.code.toLowerCase().indexOf(searchQuery) !== -1
      );
    });
    return setDisplayCurrencies(filteredCurrencies);
  };

  return (
    <div className="add-favourite">
      <input
        type="'text"
        className="search-input"
        placeholder="search for currency"
        onChange={(e) => search(e)}
      />
      <button type="button" className="btn back-btn">
        go back
      </button>
      <div className="currency-container flex flex-jc-c">
        {displayCurrencies.map(({ currency, mid, code }) => {
          return (
            <Currency
              currency={currency}
              mid={mid}
              code={code}
              key={currency.code}
              value
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddFavourite;
