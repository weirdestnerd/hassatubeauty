import React, { useState } from "react";
import classNames from "classnames";
import { frontalType } from "../../../../proptypes/frontalType";
import TextureInput from "./TextureInput";
import LaceInput from "./LaceInput";
import HairLengthInput from "./HairLengthInput";

function Customization({ frontal }) {
  const [texture, setTexture] = useState(null);
  const [lace, setLace] = useState(null);
  const [hairLength, setHairLength] = useState(null);

  const addToCart = () => {
    // eslint-disable-next-line no-console
    console.log(frontal.name);
  };

  const showPrice = () => {
    return texture !== null && lace !== null && hairLength !== null;
  };

  const calculatePrice = () => {
    return frontal.pricing[lace][hairLength];
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
        options={frontal.texture}
      />

      <LaceInput lace={lace} setLace={setLace} options={frontal.laces} />

      <HairLengthInput
        hairLength={hairLength}
        setHairLength={setHairLength}
        options={frontal.lengths}
      />

      <div className="mt-10 flex sm:flex-col1">{renderCTAButton()}</div>
    </form>
  );
}

Customization.propTypes = {
  frontal: frontalType.isRequired,
};

export default Customization;
