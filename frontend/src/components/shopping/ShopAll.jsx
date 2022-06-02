import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import wigs from "../../constants/wigs";

function ShopAll() {
  return (
    <div className="bg-gray-50">
      <div>
        <header className="relative">
          <Navbar />
        </header>
      </div>

      <div>
        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Our wigs for you!
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                Our thoughtfully curated, masterfully created wigs. Imported
                from the best sellers around the world.
              </p>
            </div>

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
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      Colors:
                      <span> </span>
                      <span>
                        {product.colors.map((color) => color.name).join(", ")}
                      </span>
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* Collection */}
            <section
              aria-labelledby="featured-heading"
              className="relative mt-16 rounded-lg overflow-hidden lg:h-96"
            >
              <div className="absolute inset-0">
                <img
                  src="https://shopping-page.s3.us-west-004.backblazeb2.com/sonia-roselli-tWng4d9Njxo-unsplash.jpeg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="relative w-full h-96 lg:hidden"
              />
              <div
                aria-hidden="true"
                className="relative w-full h-32 lg:hidden"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start">
                <div>
                  <h2
                    id="featured-heading"
                    className="text-xl font-bold text-white"
                  >
                    Patricia&apos;s Oils and stuff
                  </h2>
                  <p className="mt-1 text-sm text-gray-300">
                    We&apos;ve partnered with Patricia Company to bring you
                    essential oils for your daily needs. Something something
                    something buy them
                  </p>
                </div>
                <a
                  href="/shop-patricia"
                  className="mt-6 flex-shrink-0 flex bg-white bg-opacity-0 py-3 px-4 border border-white border-opacity-25 rounded-md items-center justify-center text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
                >
                  View the collection
                </a>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ShopAll;
