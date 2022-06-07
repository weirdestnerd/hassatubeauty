import React from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import { CheckCircleIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import pricing from "../../../constants/pricing";

function HairTextureInput({ hairTexture, setHairTexture }) {
  return (
    <div className="mt-10">
      <h3 className="text-sm text-gray-600">Hair texture</h3>

      <RadioGroup
        value={hairTexture}
        onChange={setHairTexture}
        className="mt-2"
      >
        <RadioGroup.Label className="sr-only">
          Choose hair texture
        </RadioGroup.Label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {pricing.hairTextures.map((texture) => (
            <RadioGroup.Option
              key={texture.id}
              value={texture}
              className={({ checked, active }) =>
                classNames(
                  checked ? "border-transparent" : "border-gray-300",
                  active ? "border-indigo-500 ring-2 ring-indigo-500" : "",
                  "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex-1 flex">
                    <span className="flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {texture.name}
                      </RadioGroup.Label>

                      <RadioGroup.Description
                        as="span"
                        className="mt-1 flex items-center text-sm text-gray-500"
                      >
                        {texture.description}
                      </RadioGroup.Description>

                      {texture.popular && (
                        <RadioGroup.Description
                          as="span"
                          className="mt-6 text-sm font-medium text-gray-900"
                        >
                          Popular
                        </RadioGroup.Description>
                      )}
                    </span>
                  </span>
                  <CheckCircleIcon
                    className={classNames(
                      !checked ? "invisible" : "",
                      "h-5 w-5 text-indigo-600"
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      active ? "border" : "border-2",
                      checked ? "border-indigo-500" : "border-transparent",
                      "absolute -inset-px rounded-lg pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

HairTextureInput.propTypes = {
  hairTexture: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    popular: PropTypes.bool.isRequired,
  }),
  setHairTexture: PropTypes.func.isRequired,
};

HairTextureInput.defaultProps = {
  hairTexture: null,
};

export default HairTextureInput;
