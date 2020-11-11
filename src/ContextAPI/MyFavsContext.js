import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyFavsContext = createContext();

export const MyFavsProvider = ({ children }) => {
  const [myFavsCurrencies, setMyFavsCurrencies] = useState([
    {
      currency: 'bat (Tajlandia)',
      code: 'THB',
      mid: 0.1255,
    },
    {
      currency: 'dolar amerykański',
      code: 'USD',
      mid: 3.8168,
    },
    {
      currency: 'dolar australijski',
      code: 'AUD',
      mid: 2.7824,
    },
    {
      currency: 'dolar Hongkongu',
      code: 'HKD',
      mid: 0.4923,
    },
  ]);

  return (
    <MyFavsContext.Provider value={[myFavsCurrencies, setMyFavsCurrencies]}>
      {children}
    </MyFavsContext.Provider>
  );
};

MyFavsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
