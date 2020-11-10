import React from 'react';
import PropTypes from 'prop-types';

function Currency({ currency, mid, code, value }) {
  Currency.propTypes = {
    currency: PropTypes.string.isRequired,
    mid: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
  };
  console.log(value);

  return (
    <div className="currency flex flex-col flex-ai-c flex-jc-sb">
      <h3 className="currency-info">{code}</h3>
      <h3 className="currency-rate">{mid}</h3>
      <h3 className="currency-info">{currency}</h3>
      {value ? (
        <button type="button" className="btn add-btn">
          add
        </button>
      ) : (
        <button type="button" className="btn remove-btn">
          remove
        </button>
      )}
    </div>
  );
}

export default Currency;
