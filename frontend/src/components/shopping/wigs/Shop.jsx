import React from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import ShopRelated from "./ShopRelated";
import ProductCustomization from "../ProductCustomization";
import calculatePriceRange from "../../../helpers/utils";
import Navbar from "../../navbar/Navbar";
import ProductFeatures from "../ProductFeatures";
import ProductDetails from "../ProductDetails";
import Footer from "../../footer/Footer";
import { wigType } from "../../../proptypes/wigType";

function Shop({ wig }) {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="px-3 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {/*
                    TODO: show wig.additionalImages;
                    TODO: handle updating image when texture is selected during customization
                  */}
                  {Object.values(wig.images).map((image) => (
                    <Tab
                      key={image.id}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 rounded-md overflow-hidden">
                            <img
                              src={image.src}
                              alt=""
                              className="w-full h-full object-center object-cover"
                              style={image.styling}
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
                {Object.values(wig.images).map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                      style={image.styling}
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {wig.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">
                  {calculatePriceRange(wig.pricing, wig.priceCheckTexture)}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>{wig.description}</p>
                </div>
              </div>

              <ProductCustomization
                product={wig}
                priceCheckTexture={wig.priceCheckTexture}
              />

              <ProductDetails product={wig} />
            </div>
          </div>

          <ProductFeatures product={wig} />

          <ShopRelated wigKey={wig.key} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

Shop.propTypes = {
  wig: wigType.isRequired,
};

export default Shop;
