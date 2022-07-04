import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { productType } from "../../proptypes/productType";
import TextureInput from "./inputs/TextureInput";
import LaceInput from "./inputs/LaceInput";
import HairLengthInput from "./inputs/HairLengthInput";
import { useSignedInUser } from "../../hooks/UserHook";
import CondensedNotification from "../alerts/CondensedNotification";
import { addToCart } from "../../firebase";
import Notification from "../alerts/Notification";
import { lacesExists } from "../../helpers/utils";

function ProductCustomization({ product, texture, setTexture }) {
  const laces = Object.keys(product.laces);
  const [lace, setLace] = useState(laces.length === 1 ? laces[0] : null);
  const [hairLength, setHairLength] = useState(null);
  const [customPrice, setCustomPrice] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [addingToCartError, setAddingToCartError] = useState(null);

  const user = useSignedInUser();
  const navigate = useNavigate();

  const showPrice = () =>
    texture !== null &&
    (lacesExists(product) ? lace !== null : true) &&
    hairLength !== null;

  useEffect(() => {
    if (!showPrice()) return;

    const price = lacesExists(product)
      ? product.pricing[lace]
      : product.pricing;
    setCustomPrice(price[texture][hairLength]);
  }, [texture, lace, hairLength]);

  useEffect(() => {
    if (!showSuccessToast) return;

    setTimeout(() => setShowSuccessToast(false), 4000);
  }, [showSuccessToast]);

  const addProductToCart = () => {
    if (!user) navigate(`/sign-in?redirect=${product.href}`);
    if (addingToCart) return;

    setAddingToCart(true);

    addToCart(user.uid, {
      key: product.key,
      type: product.key.split("-")[0],
      price: customPrice,
      texture,
      lace,
      hairLength,
    })
      .then(() => {
        setShowSuccessToast(true);
      })
      .catch((error) => {
        setAddingToCartError(`${product.name} Error: ${error}`);
      })
      .finally(() => setAddingToCart(false));
  };

  const renderCTAButton = () => {
    let buttonText;
    if (showSuccessToast) buttonText = "Added!";
    else buttonText = showPrice() ? "Add to bag" : "Customize to see price";

    const className = classNames(
      "max-w-xs flex-1 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full",
      {
        "bg-green-600": showSuccessToast,
        "hover:bg-green-700": showSuccessToast,
        "focus:ring-green-500": showSuccessToast,
        "bg-indigo-600": !showSuccessToast,
        "hover:bg-indigo-700": !showSuccessToast,
        "focus:ring-indigo-500": !showSuccessToast,
      }
    );

    return (
      <button
        type="submit"
        className={className}
        disabled={addingToCart || !showPrice()}
        onClick={addProductToCart}
      >
        <p className={classNames({ "opacity-50": !showPrice() })}>
          {buttonText}
        </p>
        {!showSuccessToast && showPrice() && (
          <span className="pl-2">${customPrice}</span>
        )}
      </button>
    );
  };

  const hairLengthOptions = () => {
    let options = {};

    if (texture === null) return options;

    if (lacesExists(product) && lace === null) return options;
    options = lacesExists(product)
      ? Object.keys(product.pricing[lace][texture])
      : Object.keys(product.pricing[texture]);

    const optionsAsMap = new Map(
      options.map((hairLengthOption) => [
        hairLengthOption,
        hairLengthOption.toString(),
      ])
    );

    return Object.fromEntries(optionsAsMap);
  };

  const renderSuccessToast = () => {
    if (!showSuccessToast) return null;

    const description = [
      product.texture[texture],
      lacesExists(product) && product.laces[lace],
      `${hairLength}"`,
    ].join(" - ");

    return (
      <Notification
        type="success"
        onClose={() => setShowSuccessToast(false)}
        message={`Added to your cart: ${product.name}`}
        description={description}
      />
    );
  };

  return (
    <>
      {renderSuccessToast()}
      {addingToCartError && (
        <CondensedNotification
          type="danger"
          onClose={() => setAddingToCartError(null)}
          message={addingToCartError}
        />
      )}
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
          options={hairLengthOptions()}
        />

        <div className="mt-10 flex sm:flex-col1">{renderCTAButton()}</div>
      </form>
    </>
  );
}

ProductCustomization.propTypes = {
  product: productType.isRequired,
  texture: PropTypes.string,
  setTexture: PropTypes.func.isRequired,
};

ProductCustomization.defaultProps = {
  texture: null,
};

export default ProductCustomization;
