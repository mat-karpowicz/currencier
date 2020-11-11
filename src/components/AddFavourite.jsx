import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import Currency from './Currency';

// CONTEXT
import { CurrenciesContext } from '../ContextAPI/CurrenciesContext';
import { MyFavsContext } from '../ContextAPI/MyFavsContext';

// HELPERS
import fetchCurrencies from '../helpers/fetchCurrencies';

function AddFavourite({ setAddComponentDisplay, setError }) {
  const [currencies, setCurrencies] = useContext(CurrenciesContext);
  const [MyFavsCurrencies] = useContext(MyFavsContext);
  const [displayCurrencies, setDisplayCurrencies] = useState([]);

  useEffect(() => {
    const getCurrencies = async () => {
      setError(false);
      const fetchedCurrencies = await fetchCurrencies();
      if (fetchedCurrencies instanceof Error) {
        return setError(true);
      }
      setCurrencies(fetchedCurrencies);
      return setDisplayCurrencies(fetchedCurrencies);
    };

    getCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {displayCurrencies.length === 0 ? (
        <h1>Fetching data...</h1>
      ) : (
        <>
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
                  MyFavsCurrencies.some(
                    (favCurr) => favCurr.code === currency.code
                  )
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
        </>
      )}
    </div>
  );
}

AddFavourite.propTypes = {
  setAddComponentDisplay: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default AddFavourite;
