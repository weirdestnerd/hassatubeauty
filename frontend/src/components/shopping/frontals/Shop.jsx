import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { frontalType } from "../../../proptypes/frontalType";
import ProductFeatures from "../ProductFeatures";
import ProductDetails from "../ProductDetails";
import ShopRelated from "./ShopRelated";
import { calculatePriceRange, selectedImages } from "../../../helpers/utils";
import ProductCustomization from "../ProductCustomization";
import ProductImageGallery from "../ProductImageGallery";

function Shop({ frontal }) {
  const [texture, setTexture] = useState(null);
  const [imageGallery, setImageGallery] = useState(
    selectedImages(frontal, null)
  );

  const onTextureChange = (selectedTexture) => {
    setTexture(selectedTexture);
    setImageGallery(selectedImages(frontal, selectedTexture));
  };

  return (
    <div className="bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <ProductImageGallery product={frontal} images={imageGallery} />

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {frontal.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">
                  {calculatePriceRange(frontal)}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <p>{frontal.description}</p>
                </div>
              </div>

              <ProductCustomization
                product={frontal}
                texture={texture}
                setTexture={onTextureChange}
              />

              <ProductDetails product={frontal} />
            </div>
          </div>

          <ProductFeatures product={frontal} />

          <ShopRelated frontalKey={frontal.key} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

Shop.propTypes = {
  frontal: frontalType.isRequired,
};

export default Shop;
