import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductImage from "../ProductImage";
import { calculatePriceRange } from "../../../helpers/utils";
import { getAllProducts } from "../../../firebase";
import RollbarError from "../../../helpers/Rollbar";

function ShopRelated({ wigKey }) {
  const [availableWigs, setAvailableWigs] = useState(null);

  useEffect(() => {
    getAllProducts("wigs").then(setAvailableWigs).catch(RollbarError);
  }, []);

  const otherWigs = () => {
    return Object.keys(availableWigs)
      .filter((availableWig) => availableWig !== wigKey)
      .slice(0, 4)
      .map((otherWig) => availableWigs[otherWig]);
  };

  if (!availableWigs || Object.keys(availableWigs).length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
    >
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Other wigs we have
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {otherWigs().map((wig) => (
          <a href={wig.href} key={wig.id}>
            <div>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <ProductImage productImages={wig.images} />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {wig.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {calculatePriceRange(wig)}
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
                <div className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
                  Shop
                  <span className="sr-only">, {wig.name}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

ShopRelated.propTypes = {
  wigKey: PropTypes.string.isRequired,
};

export default ShopRelated;
