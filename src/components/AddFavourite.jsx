import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Currency from './Currency';

// CONTEXT
import { CurrenciesContext } from '../ContextAPI/CurrenciesContext';
import { MyFavsContext } from '../ContextAPI/MyFavsContext';

function AddFavourite({ setAddComponentDisplay }) {
  const [currencies] = useContext(CurrenciesContext);
  const [MyFavsCurrencies] = useContext(MyFavsContext);
  const [displayCurrencies, setDisplayCurrencies] = useState(currencies);

  const search = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredCurrencies = currencies.filter((currency) => {
      return (
        currency.currency.toLowerCase().indexOf(searchQuery) !== -1 ||
        currency.code.toLowerCase().indexOf(searchQuery) !== -1
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
        {displayCurrencies
          .filter((currency) => {
            if (
              MyFavsCurrencies.some((favCurr) => favCurr.code === currency.code)
            ) {
              return null;
            }
            return currency;
          })
          .map(({ currency, mid, code }) => {
            return (
              <Currency
                key={code}
                currency={currency}
                mid={mid}
                code={code}
                btnType
                displayCurrencies={displayCurrencies}
                setDisplayCurrencies={setDisplayCurrencies}
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
