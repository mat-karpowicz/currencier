const fetchCurrencies = async (options) => {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const currencies = await fetch(process.env.REACT_APP_API_URL, {
    ...options,
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((data) => {
      return data[0].rates;
    })
    .catch((error) => {
      return new Error('Error during fetch', error);
    });

  clearTimeout(id);
  return currencies;
};

async function getCurrencies() {
  const currenciesResponse = await fetchCurrencies('/games', {
    timeout: 6000,
  });

  return currenciesResponse;
}

export default getCurrencies;
