/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import classNames from "classnames";

function CondensedNotification({ type, message, onClose }) {
  let timeoutId;

  useEffect(() => {
    timeoutId = setTimeout(onClose, 3000);
    return () => clearTimeout(timeoutId);
  });

  const className = classNames(
    "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",
    {
      "bg-green-50": type && type === "success",
      "bg-red-50": type && type === "danger",
    }
  );

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex z-10 items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={className}>
              <div className="p-4">
                <div className="flex items-center">
                  <div className="w-0 flex-1 flex justify-between">
                    <p className="w-0 flex-1 text-sm font-medium text-gray-900">
                      {message}
                    </p>
                    {/* <button */}
                    {/*    type="button" */}
                    {/*    className="ml-3 flex-shrink-0 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" */}
                    {/* > */}
                    {/*    Undo */}
                    {/* </button> */}
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}

CondensedNotification.propTypes = {
  type: PropTypes.oneOf(["success", "danger"]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

CondensedNotification.defaultProps = {
  type: null,
};

export default CondensedNotification;
