import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

function InputError({ message }) {
  return (
    <div className="rounded-md bg-red-50 p-4 mt-2">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">{message}</p>
        </div>
      </div>
    </div>
  );
}

InputError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default InputError;
