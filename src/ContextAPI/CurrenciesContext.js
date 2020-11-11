import React, { createContext, useState } from 'react';
import PropTypes, { element } from 'prop-types';

export const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([
    {
      currency: 'rubel rosyjski',
      code: 'RUB',
      mid: 0.05,
    },
    {
      currency: 'rupia indonezyjska',
      code: 'IDR',
      mid: 0.00027166,
    },
    {
      currency: 'rupia indyjska',
      code: 'INR',
      mid: 0.051459,
    },
    {
      currency: 'won południowokoreański',
      code: 'KRW',
      mid: 0.00342,
    },
    {
      currency: 'yuan renminbi (Chiny)',
      code: 'CNY',
      mid: 0.5778,
    },
    {
      currency: 'SDR (MFW)',
      code: 'XDR',
      mid: 5.4035,
    },
  ]);

  return (
    <CurrenciesContext.Provider value={[currencies, setCurrencies]}>
      {children}
    </CurrenciesContext.Provider>
  );
};

CurrenciesProvider.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};
