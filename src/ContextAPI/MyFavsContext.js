import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const MyFavsContext = createContext();

export const MyFavsProvider = ({ children }) => {
  const [myFavsCurrencies, setMyFavsCurrencies] = useState([]);

  return (
    <MyFavsContext.Provider value={[myFavsCurrencies, setMyFavsCurrencies]}>
      {children}
    </MyFavsContext.Provider>
  );
};

MyFavsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
