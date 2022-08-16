import React from "react";
import { productFeatureType } from "../../proptypes/productType";

function ProductFeatures({ product }) {
  const renderProductImageAt = (productImages, index) => {
    const allKeys = Object.keys(productImages);
    if (allKeys.length === 0)
      return (
        <img
          src="https://landing-page-images.s3.us-west-004.backblazeb2.com/No_image_available.svg.png"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      );
    const imageKey =
      index < allKeys.length ? allKeys[index] : allKeys[allKeys.length - 1];
    const image = productImages[imageKey][0];

    return (
      <img
        src={image.src}
        alt={image.alt}
        style={image.styling}
        className="w-full h-full object-center object-cover"
      />
    );
  };

  return (
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
            {renderProductImageAt(product.images, 0)}
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
              {renderProductImageAt(product.images, 1)}
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
              {renderProductImageAt(product.images, 2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductFeatures.propTypes = {
  product: productFeatureType.isRequired,
};

export default ProductFeatures;
