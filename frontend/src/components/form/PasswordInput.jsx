import React from "react";
import PropTypes from "prop-types";
import formikType from "../../proptypes/formikType";
import InputError from "./InputError";

function PasswordInput({ formik, asConfirmation }) {
  const identifier = asConfirmation ? "passwordConfirmation" : "password";

  const renderError = () => {
    if (asConfirmation && formik.errors.passwordConfirmation) {
      return <InputError message={formik.errors.passwordConfirmation} />;
    }

    return (
      formik.errors.password && <InputError message={formik.errors.password} />
    );
  };

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700"
      >
        Password {asConfirmation && "confirmation"}
        <div className="mt-1">
          <input
            id={identifier}
            name={identifier}
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            value={
              asConfirmation
                ? formik.values.passwordConfirmation
                : formik.values.password
            }
          />
        </div>
      </label>

      {renderError()}
    </div>
  );
}

PasswordInput.propTypes = {
  formik: formikType.isRequired,
  asConfirmation: PropTypes.bool,
};

PasswordInput.defaultProps = {
  asConfirmation: false,
};

export default PasswordInput;
