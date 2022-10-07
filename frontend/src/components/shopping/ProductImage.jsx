import React from "react";
import { productImageType } from "../../proptypes/productType";

function ProductImage({ productImages }) {
  let firstImage;
  if (Array.isArray(productImages)) {
    const firstIndex = 0;
    firstImage = productImages[firstIndex];
  } else {
    const firstImageKey = Object.keys(productImages)[0];
    const firstIndex = 0;
    firstImage = productImages[firstImageKey][firstIndex];
  }

  if (!firstImage)
    firstImage = {
      src: "https://landing-page-images.s3.us-west-004.backblazeb2.com/No_image_available.svg.png",
      alt: "",
    };

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
  productImages: productImageType.isRequired,
};

export default ProductImage;
