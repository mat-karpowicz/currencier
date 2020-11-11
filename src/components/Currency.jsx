import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// CONTEXT
import { MyFavsContext } from '../ContextAPI/MyFavsContext';

function Currency({
  currency,
  mid,
  code,
  btnType,
  displayCurrencies,
  setDisplayCurrencies,
}) {
  const [myFavsCurrencies, setMyFavsCurrencies] = useContext(MyFavsContext);

  const addCurrency = () => {
    setMyFavsCurrencies([...myFavsCurrencies, { currency, mid, code }]);
    const filteredDisplayCurrencies = displayCurrencies.filter((curr) => {
      return curr.code !== code;
    });
    setDisplayCurrencies(filteredDisplayCurrencies);
  };

  const removeCurrency = () => {
    const filteredFavsCurrencies = myFavsCurrencies.filter((curr) => {
      return curr.code !== code;
    });
    setMyFavsCurrencies(filteredFavsCurrencies);
  };

  return (
    <div className="currency flex flex-col flex-ai-c flex-jc-sb">
      <h3 className="currency-info">{code}</h3>
      <h3 className="currency-rate">{mid}</h3>
      <h3 className="currency-info">{currency}</h3>
      {btnType ? (
        <button
          type="button"
          className="btn add-btn"
          onClick={() => addCurrency()}
        >
          add
        </button>
      ) : (
        <button
          type="button"
          className="btn remove-btn"
          onClick={() => removeCurrency()}
        >
          remove
        </button>
      )}
    </div>
  );
}

Currency.defaultProps = {
  displayCurrencies: null,
  setDisplayCurrencies: null,
};

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  mid: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  btnType: PropTypes.bool.isRequired,
  displayCurrencies: PropTypes.arrayOf(Object),
  setDisplayCurrencies: PropTypes.func,
};

export default Currency;
