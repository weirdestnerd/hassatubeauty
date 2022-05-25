import React, { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import PropTypes from "prop-types";
import BASE_API_URL from "../../constants/api";

function NotifyMeForm({ setConfirmationModal }) {
  const onSubmit = (values) => {
    axios({
      method: "POST",
      url: `${BASE_API_URL}/notify_new_email`,
      data: {
        email: values.email,
      },
    })
      .then(() => {
        setConfirmationModal(true);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
  });

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit,
  });

  const renderError = (message) => {
    return (
      <div className="block">
        <p className="text-base text-red-400">{message}</p>
      </div>
    );
  };

  return (
    <>
      <form className="mt-4 sm:mt-6 sm:flex" onSubmit={formik.handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="text"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
          >
            Notify me
          </button>
        </div>
      </form>
      {formik.errors.email && renderError("Please enter a valid email")}
    </>
  );
}

NotifyMeForm.propTypes = {
  setConfirmationModal: PropTypes.func.isRequired,
};

export default NotifyMeForm;
