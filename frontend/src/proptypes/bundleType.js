import PropTypes from "prop-types";

export const bundleImagesType = PropTypes.objectOf(
  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  )
);

export const bundleType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  laces: PropTypes.objectOf(PropTypes.string).isRequired,
  pricing: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.objectOf(PropTypes.number))
  ).isRequired,
  texture: PropTypes.objectOf(PropTypes.string).isRequired,
  images: bundleImagesType.isRequired,
  additionalImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
  description: PropTypes.string.isRequired,
  quickDescription: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
});
