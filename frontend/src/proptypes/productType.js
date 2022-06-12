import PropTypes from "prop-types";
import { frontalImagesType, frontalType } from "./frontalType";
import { wigImagesType, wigType } from "./wigType";
import { closureImagesType, closureType } from "./closureType";

export const productType = PropTypes.oneOfType([
  frontalType,
  wigType,
  closureType,
]);

export const productFeatureType = PropTypes.shape({
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.oneOfType([
    frontalImagesType,
    wigImagesType,
    closureImagesType,
  ]),
  description: PropTypes.string.isRequired,
  quickDescription: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
});
