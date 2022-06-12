import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import wigs from "../../constants/wigs";

function ShopWigs() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div>
        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            <section className="relative mb-10 max-w-7xl mx-auto pt-10 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8">
              <div className="py-32 text-center">
                <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-9xl">
                  Our wigs for you!
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                  Our thoughtfully curated, masterfully created wigs. Imported
                  from the best sellers around the world.
                </p>
              </div>
            </section>

            {/* Product grid */}
            <section
              aria-labelledby="products-heading"
              className="border-t border-gray-200 mt-8 pt-6"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {Object.values(wigs).map((product) => (
                  <a key={product.id} href={product.href} className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        style={product.images[0].styling}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>
                        {product.starting_price} - {product.highest_price}
                      </p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      Fully customizable!
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ShopWigs;
