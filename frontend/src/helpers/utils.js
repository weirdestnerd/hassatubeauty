import classNames from "classnames";

const calculatePriceRange = (product) => {
  const lacesExists = Object.keys(product.laces).length > 0;

  let minMaxPrices = null;

  if (lacesExists) {
    minMaxPrices = Object.keys(product.pricing)
      .map((lace) => {
        return Object.keys(product.pricing[lace]).map((texture) => {
          const texturePrices = Object.values(product.pricing[lace][texture]);
          return [Math.min(...texturePrices), Math.max(...texturePrices)];
        });
      })
      .flat(2);
  } else {
    minMaxPrices = Object.keys(product.pricing)
      .map((texture) => {
        const texturePrices = Object.values(product.pricing[texture]);
        return [Math.min(...texturePrices), Math.max(...texturePrices)];
      })
      .flat();
  }

  const startingPrice = Math.min(...minMaxPrices);
  const highestPrice = Math.max(...minMaxPrices);

  return `$${startingPrice} - $${highestPrice}`;
};

const selectedImages = (product, selectedTexture) => {
  return selectedTexture === null
    ? Object.keys(product.images).map((texture) => product.images[texture][0])
    : product.images[selectedTexture];
};

const lacesExists = (product) => Object.keys(product.laces).length > 0;

const disabledButtonClassName = (classname, disabled) =>
  classNames(classname, {
    "disabled:opacity-50": disabled,
  });

export {
  calculatePriceRange,
  selectedImages,
  lacesExists,
  disabledButtonClassName,
};
