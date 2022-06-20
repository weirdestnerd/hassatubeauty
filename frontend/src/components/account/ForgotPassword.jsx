import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import EmailInput from "../form/EmailInput";
import Modal from "../Modal";
import Logo from "../Logo";
import { passwordReset } from "../../firebase";
import Notification from "../alerts/Notification";

function ForgotPassword() {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const onSubmit = (values) => {
    passwordReset(values.email)
      .then(() => setShowModal(true))
      .catch(setError);
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit,
  });

  const renderErrorNotification = () => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const onClose = () => setError(null);

    switch (errorCode) {
      case "auth/user-not-found":
        return (
          <Notification
            onClose={onClose}
            message="No account found"
            description="We couldn't find any account for your email"
          />
        );
      default:
        return <Notification onClose={onClose} message={errorMessage} />;
    }
  };

  return (
    <>
      {error && renderErrorNotification()}
      {showModal && (
        <Modal
          message="Password reset!"
          description="Check your email for password reset link"
          onClose={() => setShowModal(false)}
        />
      )}
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset password to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <EmailInput formik={formik} />

              <button
                type="submit"
                onClick={() => onSubmit(formik.values)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
