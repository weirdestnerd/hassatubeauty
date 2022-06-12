import React from "react";
import PropTypes from "prop-types";
import frontals from "../../../constants/frontals";
import calculatePriceRange from "./helpers/utils";

function ShopRelated({ frontalKey }) {
  const otherFrontals = () => {
    const availableFrontals = Object.keys(frontals);
    return availableFrontals
      .filter((availableFrontal) => availableFrontal !== frontalKey)
      .slice(0, 4)
      .map((otherFrontal) => frontals[otherFrontal]);
  };

  const renderFrontalImage = (frontalImages) => {
    const firstImageKey = Object.keys(frontalImages)[0];
    const firstImage = frontalImages[firstImageKey];

    return (
      <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
        <img
          src={firstImage.src}
          alt={firstImage.alt}
          style={firstImage.styling}
          className="w-full h-full object-center object-cover"
        />
      </div>
    );
  };

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
    >
      <h2 id="related-heading" className="text-xl font-bold text-gray-900">
        Other frontals we have
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {otherFrontals().map((frontal) => (
          <div key={frontal.id}>
            <div className="relative">
              <div className="relative w-full h-72 rounded-lg overflow-hidden">
                {renderFrontalImage(frontal.images)}
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {frontal.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {calculatePriceRange(frontal.pricing)}
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
                href={frontal.href}
                className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Shop
                <span className="sr-only">, {frontal.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

ShopRelated.propTypes = {
  frontalKey: PropTypes.string.isRequired,
};

export default ShopRelated;
