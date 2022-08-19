import React from "react";
import PropTypes from "prop-types";

function MiniLogo({ plain }) {
  return (
    <div className="h-16 flex items-center justify-center">
      <div className="ml-4 flex lg:ml-0">
        <a href="/">
          <span className="sr-only">Hassatu Beauty</span>
          <img
            className="h-8 w-auto"
            src="https://coming-soon-page.s3.us-west-004.backblazeb2.com/logo.PNG"
            alt=""
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

MiniLogo.propTypes = {
  plain: PropTypes.bool,
};

MiniLogo.defaultProps = {
  plain: false,
};

export default MiniLogo;
