import React, { createContext, useState } from 'react';
import PropTypes, { element } from 'prop-types';

export const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);

  return (
    <CurrenciesContext.Provider value={[currencies, setCurrencies]}>
      {children}
    </CurrenciesContext.Provider>
  );
};

CurrenciesProvider.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};
