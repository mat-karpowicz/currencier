import React from 'react';
import PropTypes from 'prop-types';

function Currency({ currency, mid, code, btnType }) {
  return (
    <div className="currency flex flex-col flex-ai-c flex-jc-sb">
      <h3 className="currency-info">{code}</h3>
      <h3 className="currency-rate">{mid}</h3>
      <h3 className="currency-info">{currency}</h3>
      {btnType ? (
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

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
  mid: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  btnType: PropTypes.bool.isRequired,
};

export default Currency;
