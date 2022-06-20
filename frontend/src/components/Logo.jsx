import React from "react";

function Logo() {
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

      <a href="/">
        <p className="text-base text-center font-extrabold tracking-tight text-gray-900 sm:text-sm xl:text-3xl ml-2">
          Hassatu Beauty
        </p>
      </a>
    </div>
  );
}

export default Logo;
