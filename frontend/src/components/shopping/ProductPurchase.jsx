import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import CondensedNotification from "../alerts/CondensedNotification";
import QuantityInput from "./inputs/QuantityInput";
import Notification from "../alerts/Notification";
import { addToCart } from "../../firebase";
import { useSignedInUser } from "../../hooks/UserHook";
import { productType } from "../../proptypes/productType";

function ProductPurchase({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [customPrice, setCustomPrice] = useState(0);
  const [addingToCart, setAddingToCart] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [addingToCartError, setAddingToCartError] = useState(null);

  const user = useSignedInUser();
  const navigate = useNavigate();

  useEffect(() => {
    setCustomPrice(product.pricing * parseInt(quantity, 10));
  }, [quantity]);

  const quantityOptions = () => {
    return {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
    };
  };

  const addProductToCart = () => {
    if (!user) navigate(`/sign-in?redirect=${product.href}`);
    if (addingToCart) return;

    setAddingToCart(true);

    addToCart(user.uid, {
      productId: product.id,
      key: product.key,
      type: product.type,
      price: customPrice,
      quantity,
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
    else buttonText = "Add to bag";

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
        disabled={addingToCart}
        onClick={addProductToCart}
      >
        <p>{buttonText}</p>
        {!showSuccessToast && <span className="pl-2">${customPrice}</span>}
      </button>
    );
  };

  const renderSuccessToast = () => {
    if (!showSuccessToast) return null;

    return (
      <Notification
        type="success"
        onClose={() => setShowSuccessToast(false)}
        message={`Added to your cart: ${product.name}`}
        description={`Quantity - ${quantity}`}
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
        <QuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          options={quantityOptions()}
        />

        <div className="mt-10 flex sm:flex-col1">{renderCTAButton()}</div>
      </form>
    </>
  );
}

ProductPurchase.propTypes = {
  product: productType.isRequired,
};

export default ProductPurchase;
