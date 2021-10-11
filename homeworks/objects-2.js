// https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop
// https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop/1/product

const makeHttpCall = async function (url) {
  return await (await fetch(url)).json();
};

const filterShops = (shops, price, offsett = 0, colors = []) => {
  const [minPrice, maxPrice] = [
    Math.max(price - offsett, 0),
    Math.max(price + offsett, 0),
  ];

  return shops.filter((shop) =>
    shop.products.some(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.color.some((_color) => colors.includes(_color.name))
    )
  );
};

(async () => {
  const result = await makeHttpCall(
    "https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop"
  );

  for (let shop of result) {
    shop.products = await makeHttpCall(
      `https://5f9fef6ce21bab0016dfc996.mockapi.io/api/v1/shop/${shop.id}/product`
    );
  }

  console.log(filterShops(result, 500, 100, ["cyan", "silver"]));
})();
