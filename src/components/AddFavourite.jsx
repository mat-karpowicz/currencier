import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Currency from './Currency';

// CONTEXT
import { CurrenciesContext } from '../ContextAPI/CurrenciesContext';

function AddFavourite({ setAddComponentDisplay }) {
  // eslint-disable-next-line
  const [currencies, setCurrencies] = useContext(CurrenciesContext);
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
      <button
        type="button"
        className="btn back-btn"
        onClick={() => setAddComponentDisplay(false)}
      >
        go back
      </button>
      <div className="currency-container flex flex-jc-c">
        {displayCurrencies.map(({ currency, mid, code }) => {
          return (
            <Currency
              key={currency.code}
              currency={currency}
              mid={mid}
              code={code}
              btnType
            />
          );
        })}
      </div>
    </div>
  );
}

AddFavourite.propTypes = {
  setAddComponentDisplay: PropTypes.func.isRequired,
};

export default AddFavourite;
