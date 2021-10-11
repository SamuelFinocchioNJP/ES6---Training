// https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop
// https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop/1/product

const makeHttpCall = async function (url) {
  return await (await fetch(url)).json();
};

(async () => {
  const dati = await makeHttpCall(
    "https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop"
  );
})();
