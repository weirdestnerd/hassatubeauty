import React from "react";
import { productImageType } from "../../proptypes/productType";

function SingleProductImage({ image }) {
  return (
    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
      <img
        src={image.src}
        alt={image.alt}
        style={image.styling}
        className="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
  );
}

SingleProductImage.propTypes = {
  image: productImageType.isRequired,
};

export default SingleProductImage;
