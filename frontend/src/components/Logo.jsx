import React from "react";
import PropTypes from "prop-types";

function Logo({ plain }) {
  return (
    <div className="basis-full h-64 flex items-center justify-center">
      <div className="ml-4 flex lg:ml-0">
        <a href="/">
          <span className="sr-only">Hassatu Beauty</span>
          <img
            className="h-64 w-auto"
            src="https://landing-page-images.s3.us-west-004.backblazeb2.com/IMG_5845.JPG"
            alt=""
            style={{ width: "43rem" }}
          />
        </a>
      </div>

      {!plain && (
        <a href="/">
          <p className="text-base text-center font-extrabold tracking-tight text-gray-900 sm:text-sm xl:text-3xl ml-2">
            Hassatu Beauty
          </p>
        </a>
      )}
    </div>
  );
}

Logo.propTypes = {
  plain: PropTypes.bool,
};

Logo.defaultProps = {
  plain: false,
};

export default Logo;
