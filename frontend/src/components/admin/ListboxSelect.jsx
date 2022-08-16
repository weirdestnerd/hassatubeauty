import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import PropTypes from "prop-types";

function ListboxSelect({
  selectedValue,
  setSelectedValue,
  values,
  label,
  multiple,
  disabled,
  truncate,
}) {
  const onSelection = (selectedValues) => {
    if (typeof selectedValues === "object") {
      setSelectedValue(selectedValues);
      return;
    }

    if (
      typeof selectedValues === "string" ||
      typeof selectedValues === "number"
    ) {
      setSelectedValue(values.find((val) => val.value === selectedValues));
      return;
    }

    const selection = selectedValues.splice(selectedValues.length - 1, 1)[0];
    const selections = selectedValues.map((v) => v.value);

    if (selections.includes(selection)) {
      selectedValues.splice(selections.indexOf(selection), 1);
    } else {
      selectedValues.push(values.find((val) => val.value === selection));
    }

    setSelectedValue(selectedValues);
  };

  return (
    <Listbox
      value={selectedValue}
      onChange={onSelection}
      multiple={multiple}
      disabled={disabled}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            {label}
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className={classNames("block", { truncate })}>
                {multiple
                  ? selectedValue.map((v) => v.label || v.value).join(", ")
                  : selectedValue.label || selectedValue.value}
              </span>
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
              <Listbox.Options className="absolute z-20 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {values.map((eachOption) => (
                  <Listbox.Option
                    key={eachOption.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={eachOption}
                    disabled={eachOption.disabled}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {eachOption.label || eachOption.value}
                        </span>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  );
}

ListboxSelect.propTypes = {
  selectedValue: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  setSelectedValue: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  truncate: PropTypes.bool,
};

ListboxSelect.defaultProps = {
  multiple: false,
  disabled: false,
  truncate: true,
};

export default ListboxSelect;
