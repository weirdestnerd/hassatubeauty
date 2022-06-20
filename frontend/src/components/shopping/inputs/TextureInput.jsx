import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { RadioGroup } from "@headlessui/react";

function TextureInput({ texture, setTexture, options }) {
  return (
    <div className="mt-10">
      <h3 className="text-sm text-gray-600">Choose hair texture</h3>
      <RadioGroup value={texture} onChange={setTexture} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose texture</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {Object.keys(options).map((optionKey) => (
            <RadioGroup.Option
              key={optionKey}
              value={optionKey}
              className={({ active, checked }) =>
                classNames(
                  "cursor-pointer focus:outline-none",
                  active ? "ring-2 ring-offset-2 ring-indigo-500" : "",
                  checked
                    ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                    : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                  "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                )
              }
            >
              <RadioGroup.Label as="span">
                {options[optionKey]}
              </RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

TextureInput.propTypes = {
  texture: PropTypes.string,
  setTexture: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

TextureInput.defaultProps = {
  texture: null,
};

export default TextureInput;
