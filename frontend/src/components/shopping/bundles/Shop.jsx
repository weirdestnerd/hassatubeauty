import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { bundleType } from "../../../proptypes/bundleType";
import ProductFeatures from "../ProductFeatures";
import ProductDetails from "../ProductDetails";
import { calculatePriceRange, selectedImages } from "../../../helpers/utils";
import ShopRelated from "./ShopRelated";
import ProductCustomization from "../ProductCustomization";
import ProductImageGallery from "../ProductImageGallery";

function Shop({ bundle }) {
  const [texture, setTexture] = useState(null);
  const [imageGallery, setImageGallery] = useState(
    selectedImages(bundle, null)
  );

  const onTextureChange = (selectedTexture) => {
    setTexture(selectedTexture);
    setImageGallery(selectedImages(bundle, selectedTexture));
  };

  return (
    <div className="bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <ProductImageGallery product={bundle} images={imageGallery} />

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {bundle.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">
                  {calculatePriceRange(bundle)} per bundle
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>{bundle.description}</p>
                </div>
              </div>

              <ProductCustomization
                product={bundle}
                texture={texture}
                setTexture={onTextureChange}
              />

              <ProductDetails product={bundle} />
            </div>
          </div>

          <ProductFeatures product={bundle} />

          <ShopRelated bundleKey={bundle.key} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

Shop.propTypes = {
  bundle: bundleType.isRequired,
};

export default Shop;
