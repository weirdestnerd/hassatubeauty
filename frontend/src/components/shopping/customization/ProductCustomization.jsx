import React, { useState } from "react";
import classNames from "classnames";
import { productType } from "../../../proptypes/productType";
import HairTextureInput from "./HairTextureInput";
import HairLengthInput from "./HairLengthInput";

function ProductCustomization({ product }) {
  const [hairTexture, setHairTexture] = useState(null);
  const [hairLength, setHairLength] = useState(null);

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log(product.name);
  };

  const showPrice = () => {
    return hairTexture !== null;
  };

  const calculatePrice = () => {
    return "$140";
  };

  const addToCartButton = () => {
    const buttonText = showPrice() ? "Add to bag" : "Customize to see price";
    const className = classNames(
      "max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full",
      {
        "disabled:opacity-50": !showPrice(),
      }
    );

    return (
      <button
        type="submit"
        className={className}
        disabled={!showPrice()}
        onClick={addToCart}
      >
        {buttonText}
        {showPrice() && <span className="pl-2">{calculatePrice()}</span>}
      </button>
    );
  };

  return (
    <form className="mt-6">
      <HairTextureInput
        hairTexture={hairTexture}
        setHairTexture={setHairTexture}
      />

      <HairLengthInput
        hairLength={hairLength}
        setHairLength={setHairLength}
        hairTextureKey={hairTexture && hairTexture.key}
      />

      <div className="mt-10 flex sm:flex-col1">{addToCartButton()}</div>
    </form>
  );
}

ProductCustomization.propTypes = {
  product: productType.isRequired,
};

export default ProductCustomization;
