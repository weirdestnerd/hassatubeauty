import React from "react";
import formikType from "../../proptypes/formikType";
import InputError from "./InputError";

function EmailInput({ formik }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Email address
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
      </label>

      {formik.errors.email && <InputError message={formik.errors.email} />}
    </div>
  );
}

EmailInput.propTypes = {
  formik: formikType.isRequired,
};

export default EmailInput;
