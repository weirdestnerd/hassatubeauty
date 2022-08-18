import classNames from "classnames";
import PRODUCT_TYPES from "../constants";
import frontals from "../constants/frontals";
import closures from "../constants/closures";
import bundles from "../constants/bundles";
import wigs from "../constants/wigs";

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

  if (minMaxPrices.length === 0) return "$0";

  const startingPrice = Math.min(...minMaxPrices);
  const highestPrice = Math.max(...minMaxPrices);

  return `$${startingPrice} - $${highestPrice}`;
};

const selectedImages = (product, selectedTexture) => {
  if (Object.keys(product.images).length === 0) {
    return [
      {
        src: "https://landing-page-images.s3.us-west-004.backblazeb2.com/No_image_available.svg.png",
        alt: "",
        styling: {},
      },
    ];
  }

  return selectedTexture === null
    ? Object.keys(product.images).map((texture) => product.images[texture][0])
    : product.images[selectedTexture];
};

const lacesExists = (product) => Object.keys(product.laces).length > 0;

const disabledButtonClassName = (classname, disabled) =>
  classNames(classname, {
    "disabled:opacity-50": disabled,
  });

const getProduct = (key, type) => {
  switch (type) {
    case PRODUCT_TYPES.FRONTAL:
      return frontals[key];
    case PRODUCT_TYPES.CLOSURE:
      return closures[key];
    case PRODUCT_TYPES.BUNDLE:
      return bundles[key];
    case PRODUCT_TYPES.WIG:
      return wigs[key];
    default:
      return null;
  }
};

export {
  calculatePriceRange,
  selectedImages,
  lacesExists,
  disabledButtonClassName,
  getProduct,
};
