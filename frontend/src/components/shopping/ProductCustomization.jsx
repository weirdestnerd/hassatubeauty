import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { productType } from "../../proptypes/productType";
import TextureInput from "./inputs/TextureInput";
import LaceInput from "./inputs/LaceInput";
import HairLengthInput from "./inputs/HairLengthInput";

function ProductCustomization({ product, priceCheckTexture }) {
  const [texture, setTexture] = useState(null);
  const laces = Object.keys(product.laces);
  const [lace, setLace] = useState(laces.length === 1 ? laces[0] : null);
  const [hairLength, setHairLength] = useState(null);

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log(product.name);
  };

  const showPrice = () => {
    const checkLace = Object.keys(product.laces).length !== 0;
    return (
      texture !== null &&
      (checkLace ? lace !== null : true) &&
      hairLength !== null
    );
  };

  const calculatePrice = () => {
    const price =
      Object.keys(product.laces).length === 0
        ? product.pricing
        : product.pricing[lace];

    if (priceCheckTexture) return price[texture][hairLength];
    return price[hairLength];
  };

  const renderCTAButton = () => {
    const buttonText = showPrice() ? "Add to bag" : "Customize to see price";

    return (
      <button
        type="submit"
        className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
        disabled={!showPrice()}
        onClick={addToCart}
      >
        <p className={classNames({ "opacity-50": !showPrice() })}>
          {buttonText}
        </p>
        {showPrice() && <span className="pl-2">${calculatePrice()}</span>}
      </button>
    );
  };

  return (
    <form className="mt-6">
      <TextureInput
        texture={texture}
        setTexture={setTexture}
        options={product.texture}
      />

      <LaceInput lace={lace} setLace={setLace} options={product.laces} />

      <HairLengthInput
        hairLength={hairLength}
        setHairLength={setHairLength}
        options={product.lengths}
      />

      <div className="mt-10 flex sm:flex-col1">{renderCTAButton()}</div>
    </form>
  );
}

ProductCustomization.propTypes = {
  product: productType.isRequired,
  priceCheckTexture: PropTypes.bool,
};

ProductCustomization.defaultProps = {
  priceCheckTexture: false,
};

export default ProductCustomization;
