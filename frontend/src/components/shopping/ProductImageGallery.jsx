import React from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import rn from "random-number";
import PropTypes from "prop-types";

function ProductImageGallery({ images }) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse" defaultIndex={0}>
      <div className="px-3 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={rn()}
              className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src={image.src}
                      alt=""
                      className="w-full h-full object-top object-cover"
                      style={image.styling || { objectPosition: "top" }}
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
        {images.map((image) => (
          <Tab.Panel key={rn()}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-top object-cover sm:rounded-lg"
              style={image.styling}
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

ProductImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductImageGallery;
