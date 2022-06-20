import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { closureType } from "../../../proptypes/closureType";
import ProductFeatures from "../ProductFeatures";
import ProductDetails from "../ProductDetails";
import { calculatePriceRange, selectedImages } from "../../../helpers/utils";
import ShopRelated from "./ShopRelated";
import ProductCustomization from "../ProductCustomization";
import ProductImageGallery from "../ProductImageGallery";

function Shop({ closure }) {
  const [texture, setTexture] = useState(null);
  const [imageGallery, setImageGallery] = useState(
    selectedImages(closure, null)
  );

  const onTextureChange = (selectedTexture) => {
    setTexture(selectedTexture);
    setImageGallery(selectedImages(closure, selectedTexture));
  };

  return (
    <div className="bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <ProductImageGallery product={closure} images={imageGallery} />

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {closure.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">
                  {calculatePriceRange(closure)}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>{closure.description}</p>
                </div>
              </div>

              <ProductCustomization
                product={closure}
                texture={texture}
                setTexture={onTextureChange}
              />

              <ProductDetails product={closure} />
            </div>
          </div>

          <ProductFeatures product={closure} />

          <ShopRelated closureKey={closure.key} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

Shop.propTypes = {
  closure: closureType.isRequired,
};

export default Shop;
