import React from "react";
import { MinusCircleIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import Divider from "../common/Divider";

function ProductImages({ imagesTexture, images, setImages, gallery }) {
  const textureImages = images[imagesTexture.value] || [];

  const onImageRemove = (index) => {
    const newImages = [
      ...textureImages.slice(0, index),
      ...textureImages.slice(index + 1),
    ];
    setImages({ ...images, [`${imagesTexture.value}`]: [...newImages] });
  };

  const onImageAdd = (src) => {
    textureImages.push({ src });
    setImages({
      ...images,
      [`${imagesTexture.value}`]: [...textureImages],
    });
  };

  return (
    <div className="space-y-3">
      <div className="mt-1 overflow-scroll max-h-80 grid grid-cols-2 gap-x-1 gap-y-2 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-2">
        {textureImages.map((image, index) => (
          <div key={image.src} className="group relative">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden">
              <img
                src={image.dataURL || image.src}
                alt=""
                className="w-full object-center object-cover"
              />
            </div>
            <div>
              <button
                type="button"
                className="my-1 mx-1 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => onImageRemove(index)}
              >
                <MinusCircleIcon className="h-5 w-5" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <Divider />
      <p className="py-2">Click to add photo to texture</p>
      <ul className="overflow-scroll max-h-80 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        {gallery.map((image) => (
          <li key={image.id} className="relative">
            <button type="button" onClick={() => onImageAdd(image.src)}>
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={image.src}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {image.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ProductImages.propTypes = {
  imagesTexture: PropTypes.shape({ value: PropTypes.string }).isRequired,
  images: PropTypes.shape({}).isRequired,
  setImages: PropTypes.func.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ProductImages;
