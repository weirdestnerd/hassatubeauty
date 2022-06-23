import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import rn from "random-number";
import { liveCart, removeFromCart } from "../../firebase";
import frontals from "../../constants/frontals";
import closures from "../../constants/closures";
import bundles from "../../constants/bundles";
import wigs from "../../constants/wigs";
import ProductImage from "./ProductImage";
import PRODUCT_TYPES from "../../constants";

function Cart({ userUid, open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [confirmRemove, setConfirmRemove] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!open || loading || confirmRemove) return;
    setLoading(true);

    liveCart(userUid, (querySnapshot) => {
      setShoppingCart([]);
      setTotalPrice(0);
      querySnapshot.forEach((doc) => {
        setShoppingCart((currentCart) =>
          currentCart.concat([{ ...doc.data(), id: doc.id }])
        );
        setTotalPrice(
          (currentPrice) => currentPrice + parseInt(doc.data().price, 10)
        );
      });

      shoppingCart.sort((a, b) => a.timestamp - b.timestamp);
    });

    setLoading(false);
  }, [open, loading, confirmRemove]);

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

  const renderCustomization = (productInfo, product) => {
    const content = [
      product.texture[productInfo.texture],
      product.laces[productInfo.lace],
      `${productInfo.hairLength}"`,
    ].join(" - ");

    return <p className="mt-1 text-sm text-gray-500">{content}</p>;
  };

  const renderProductRemoveCTA = (productInfo) => {
    if (!confirmRemove || confirmRemove.id !== productInfo.id) {
      return (
        <button
          type="button"
          onClick={() => setConfirmRemove(productInfo)}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Remove
        </button>
      );
    }

    const onYes = () => {
      removeFromCart(userUid, productInfo.id).then(() =>
        setConfirmRemove(null)
      );
    };

    return (
      <div className="flex">
        <button
          type="button"
          onClick={onYes}
          className="font-medium text-green-600 hover:text-indigo-500"
        >
          Yes
        </button>
        <pre> - </pre>
        <button
          type="button"
          onClick={() => setConfirmRemove(null)}
          className="font-medium text-red-600 hover:text-indigo-500"
        >
          no
        </button>
      </div>
    );
  };

  const renderProducts = () => {
    if (shoppingCart.length === 0)
      return (
        <p className="my-20 mx-auto divide-y divide-gray-200 text-center">
          Nothing here
        </p>
      );

    return shoppingCart.map((productInfo) => {
      const product = getProduct(productInfo.key, productInfo.type);
      return (
        <li key={rn()} className="flex py-6">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <ProductImage productImages={product.images} />
          </div>

          <div className="ml-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href={product.href}> {product.name} </a>
                </h3>
                <p className="ml-4">${productInfo.price}</p>
              </div>
              {renderCustomization(productInfo, product)}
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500">Qty {product.quantity}</p>

              <div className="flex">{renderProductRemoveCTA(productInfo)}</div>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          {" "}
                          Shopping cart{" "}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {renderProducts()}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/checkout-page"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Cart.propTypes = {
  userUid: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Cart;
