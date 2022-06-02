import React, { useState } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import PropTypes from "prop-types";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import wigs from "../../constants/wigs";

function Shop({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const otherWigs = () => {
    const availableWigs = Object.keys(wigs);
    return availableWigs
      .filter((availableWig) => availableWig !== product.key)
      .slice(0, 4)
      .map((otherWig) => wigs[otherWig]);
  };

  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <Navbar />
      </header>

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="px-3 mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
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
                {product.images.map((image) => (
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
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">{product.price}</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>{product.description}</p>
                </div>
              </div>

              <form className="mt-6">
                {/* Colors */}
                <div>
                  <h3 className="text-sm text-gray-600">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedColor,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.bgColor,
                              "h-8 w-8 border border-black border-opacity-10 rounded-full"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="mt-10 flex sm:flex-col1">
                  <button
                    type="submit"
                    className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Add to bag
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open ? "text-indigo-600" : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="pb-6 prose prose-sm"
                          >
                            <ul>
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
              <div>
                <div className="border-b border-gray-200 pb-10">
                  <h2 className="font-medium text-gray-500">{product.name}</h2>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {product.quickDescription}
                  </p>
                </div>

                <dl className="mt-10 space-y-10">
                  {product.features.map((feature) => (
                    <div key={feature.name}>
                      <dt className="text-sm font-medium text-gray-900">
                        {feature.name}
                      </dt>
                      <dd className="mt-3 text-sm text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    style={product.images[0].styling}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src={product.images[1].src}
                      alt={product.images[1].alt}
                      style={product.images[1].styling}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src={product.images[2].src}
                      alt={product.images[2].alt}
                      style={product.images[2].styling}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop other wigs */}
          <section
            aria-labelledby="related-heading"
            className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0"
          >
            <h2
              id="related-heading"
              className="text-xl font-bold text-gray-900"
            >
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
                        Colors:
                        <span> </span>
                        <span>
                          {relatedProduct.colors
                            .map((color) => color.name)
                            .join(", ")}
                        </span>
                      </p>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        {relatedProduct.price}
                      </p>
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
        </div>
      </main>

      <Footer />
    </div>
  );
}

Shop.propTypes = {
  product: {
    id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    images: PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    colors: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
      selectedColor: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    quickDescription: PropTypes.string.isRequired,
    details: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string),
    }),
    features: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }.isRequired,
};

export default Shop;
