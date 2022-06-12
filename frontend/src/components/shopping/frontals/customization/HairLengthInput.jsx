import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import PropTypes from "prop-types";

function HairLengthInput({ hairLength, setHairLength, options }) {
  return (
    <div className="mt-10">
      <h3 className="text-sm text-gray-600">Choose hair length</h3>
      <Listbox value={hairLength} onChange={setHairLength}>
        {({ open }) => (
          <>
            <Listbox.Label className="sr-only block text-sm font-medium text-gray-700">
              Choose hair length
            </Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button
                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                style={{ minHeight: "40px " }}
              >
                <span className="block truncate">{hairLength}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {Object.keys(options).map((optionKey) => (
                    <Listbox.Option
                      key={optionKey}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-8 pr-4"
                        )
                      }
                      value={options[optionKey]}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {`${options[optionKey]}"`}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

HairLengthInput.propTypes = {
  hairLength: PropTypes.string,
  setHairLength: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

HairLengthInput.defaultProps = {
  hairLength: null,
};

export default HairLengthInput;
