import React from "react";
import PropTypes from "prop-types";
import wigs from "../../constants/wigs";

function ShopRelated({ productKey }) {
  const otherWigs = () => {
    const availableWigs = Object.keys(wigs);
    return availableWigs
      .filter((availableWig) => availableWig !== productKey)
      .slice(0, 4)
      .map((otherWig) => wigs[otherWig]);
  };

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
    >
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Other wigs we have
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {otherWigs().map((relatedProduct) => (
          <div key={relatedProduct.id}>
            <div className="relative">
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                <img
                  src={relatedProduct.images[0].src}
                  alt={relatedProduct.images[0].alt}
                  className="w-full h-full object-center object-cover"
                  style={relatedProduct.images[0].styling}
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {relatedProduct.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  As low as {relatedProduct.starting_price}
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
                href={relatedProduct.href}
                className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Shop
                <span className="sr-only">, {relatedProduct.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

ShopRelated.propTypes = {
  productKey: PropTypes.string.isRequired,
};

export default ShopRelated;
