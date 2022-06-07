import PropTypes from "prop-types";

const productType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  starting_price: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
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

export default productType;
