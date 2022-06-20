import React from "react";
import { frontalImagesType } from "../../proptypes/frontalType";

function ProductImage({ productImages }) {
  const firstImageKey = Object.keys(productImages)[0];
  const firstImage = productImages[firstImageKey][0];

  return (
    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
      <img
        src={firstImage.src}
        alt={firstImage.alt}
        style={firstImage.styling}
        className="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
  );
}

ProductImage.propTypes = {
  productImages: frontalImagesType.isRequired,
};

export default ProductImage;
