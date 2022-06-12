const calculatePriceRange = (frontalPrices) => {
  const laceMinMaxPrices = Object.keys(frontalPrices)
    .map((lace) => {
      const pricesByLength = Object.values(frontalPrices[lace]);
      return [Math.min(...pricesByLength), Math.max(...pricesByLength)];
    })
    .flat();

  const startingPrice = Math.min(...laceMinMaxPrices);
  const highestPrice = Math.max(...laceMinMaxPrices);

  return `$${startingPrice} - $${highestPrice}`;
};

export default calculatePriceRange;
