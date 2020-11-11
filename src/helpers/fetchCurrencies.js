const getCurrencies = async () => {
  const currencies = await fetch(process.env.REACT_APP_API_URL)
    .then((response) => response.json())
    .then((data) => {
      return data[0].rates;
    })
    .catch((error) => console.log(error));

  return currencies;
};

export default getCurrencies;
