import React, { useEffect, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { calculatePriceRange } from "../../../helpers/utils";
import ProductImage from "../ProductImage";
import { getAllProducts } from "../../../firebase";
import RollbarError from "../../../helpers/Rollbar";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";

function ShopAllClosures() {
  const [closures, setClosures] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts("closures")
      .then(setClosures)
      .catch(RollbarError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingPage />;
  if (!loading && !closures) return <NotFound />;

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
                <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
                  Closures
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                  Our thoughtfully curated, masterfully created closures.
                  Imported from the best sellers around the world.
                </p>
              </div>
            </section>

            {/* Product grid */}
            <section
              aria-labelledby="products-heading"
              className="border-t border-gray-200 mt-8 pt-6"
            >
              <h2 id="products-heading" className="sr-only">
                Closures
              </h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {Object.values(closures).map((closure) => (
                  <a key={closure.id} href={closure.href} className="group">
                    <ProductImage productImages={closure.images} />

                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{closure.name}</h3>
                      <p>{calculatePriceRange(closure)}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      Fully customizable
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

export default ShopAllClosures;
