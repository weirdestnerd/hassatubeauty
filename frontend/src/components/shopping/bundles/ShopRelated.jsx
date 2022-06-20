import React from "react";
import PropTypes from "prop-types";
import bundles from "../../../constants/bundles";
import { calculatePriceRange } from "../../../helpers/utils";
import ProductImage from "../ProductImage";

function ShopRelated({ bundleKey }) {
  const otherClosures = () => {
    const availableClosures = Object.keys(bundles);
    return availableClosures
      .filter((availableClosure) => availableClosure !== bundleKey)
      .slice(0, 4)
      .map((otherClosure) => bundles[otherClosure]);
  };

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
    >
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Other bundles we have
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {otherClosures().map((bundle) => (
          <div key={bundle.id}>
            <div className="relative">
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <ProductImage productImages={bundle.images} />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {bundle.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {calculatePriceRange(bundle)}
                </p>
              </div>
              <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                />
              </div>
            </div>
            <div className="mt-6">
              <a
                href={bundle.href}
                className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Shop
                <span className="sr-only">, {bundle.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

ShopRelated.propTypes = {
  bundleKey: PropTypes.string.isRequired,
};

export default ShopRelated;