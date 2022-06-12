const calculatePriceRangeUnformatted = (
  productPrices,
  priceCheckTexture = false
) => {
  const laceMinMaxPrices = Object.keys(productPrices)
    .map((lace) => {
      let pricesByLength = Object.values(productPrices[lace]);
      if (priceCheckTexture) {
        pricesByLength = calculatePriceRangeUnformatted(productPrices[lace]);
      }
      return [Math.min(...pricesByLength), Math.max(...pricesByLength)];
    })
    .flat();

  const startingPrice = Math.min(...laceMinMaxPrices);
  const highestPrice = Math.max(...laceMinMaxPrices);

  return [startingPrice, highestPrice];
};

const calculatePriceRange = (productPrices, priceCheckTexture = false) => {
  const [startingPrice, highestPrice] = calculatePriceRangeUnformatted(
    productPrices,
    priceCheckTexture
  );

  return `$${startingPrice} - $${highestPrice}`;
};

export default calculatePriceRange;
