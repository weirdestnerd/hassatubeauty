import React from "react";
import productType from "../../proptypes/productType";

function ProductFeatures({ product }) {
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
  );
}

ProductFeatures.propTypes = {
  product: productType.isRequired,
};

export default ProductFeatures;
