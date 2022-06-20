import PropTypes from "prop-types";
import { frontalImagesType, frontalType } from "./frontalType";
import { wigImagesType, wigType } from "./wigType";
import { closureImagesType, closureType } from "./closureType";
import { bundleImagesType, bundleType } from "./bundleType";

export const productType = PropTypes.oneOfType([
  frontalType,
  wigType,
  closureType,
  bundleType,
]);

export const productImageType = PropTypes.oneOfType([
  frontalImagesType,
  wigImagesType,
  closureImagesType,
  bundleImagesType,
]);

export const productFeatureType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: productImageType.isRequired,
  description: PropTypes.string.isRequired,
  quickDescription: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
});
