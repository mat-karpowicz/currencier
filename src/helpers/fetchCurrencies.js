const getCurrencies = async () => {
  const currencies = await fetch(process.env.REACT_APP_API_URL, {
    timeout: 6000,
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0].rates;
    })
    .catch((error) => {
      return new Error('Error during fetch', error);
    });

  return currencies;
};

export default getCurrencies;
