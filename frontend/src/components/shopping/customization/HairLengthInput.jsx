import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import PropTypes from "prop-types";
import pricing from "../../../constants/pricing";

function HairLengthInput({ hairLength, setHairLength, hairTextureKey }) {
  const hairLengthOptions = hairTextureKey
    ? pricing.availableLengths[hairTextureKey]
    : [];
  const className = classNames({ "disabled:opacity-50": !hairTextureKey });

  const renderOptions = () => (
    <Listbox
      value={hairLength}
      onChange={setHairLength}
      className={className}
      disabled={!hairTextureKey}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Select hair length</Listbox.Label>
          <div className="relative">
            <div className="inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
              <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-indigo-600">
                <div className="relative inline-flex items-center bg-indigo-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  <p className="ml-2.5 text-sm font-medium">
                    {hairLength} inches
                  </p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-indigo-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                  <span className="sr-only">Select hair length</span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {hairLengthOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-500" : "text-gray-900",
                        "cursor-default select-none relative p-4 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              selected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option}
                          </p>
                          {selected ? (
                            <span
                              className={
                                active ? "text-white" : "text-indigo-500"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );

  const renderCopy = () => (
    <p className="text-sm text-gray-400">Select hair texture</p>
  );

  return (
    <div className="mt-10">
      <h3 className="text-sm text-gray-600">Hair texture</h3>

      {hairTextureKey ? renderOptions() : renderCopy()}
    </div>
  );
}

HairLengthInput.propTypes = {
  hairLength: PropTypes.number.isRequired,
  setHairLength: PropTypes.func.isRequired,
  hairTextureKey: PropTypes.string,
};

HairLengthInput.defaultProps = {
  hairTextureKey: null,
};

export default HairLengthInput;
