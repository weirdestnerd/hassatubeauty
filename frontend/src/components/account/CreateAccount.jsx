import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import classNames from "classnames";
import { useSignedInUser } from "../../hooks/UserHook";
import { createUser, googleSignIn } from "../../firebase";
import Notification from "../alerts/Notification";
import LoadingOverlay from "../loading/LoadingOverlay";
import Logo from "../Logo";
import EmailInput from "../form/EmailInput";
import PasswordInput from "../form/PasswordInput";

YupPassword(Yup);

function CreateAccount() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useSignedInUser();

  useEffect(() => {
    if (user) navigate(-1);
  }, [user]);

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const onSubmit = (values) => {
    setLoading(true);
    createUser(values.email, values.password)
      .then(() => navigate(-1))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const onSignInWithGoogle = () => {
    googleSignIn()
      .then(() => navigate(-1))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const formik = useFormik({
    initialValues: { email: "", password: "", passwordConfirmation: "" },
    validationSchema: SignUpSchema,
    onSubmit,
  });

  const renderErrorNotification = () => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const onClose = () => setError(null);

    switch (errorCode) {
      case "auth/email-already-in-us":
        return (
          <Notification
            onClose={onClose}
            message="An account already exists."
            description="We already have an account for this email."
          />
        );
      case "auth/invalid-email":
        return (
          <Notification
            onClose={onClose}
            message="Invalid email"
            description="Please check your email"
          />
        );
      case "auth/weak-password":
        return (
          <Notification
            onClose={onClose}
            message="Sorry! Weak password"
            description="Try a stronger password for security."
          />
        );
      default:
        return <Notification onClose={onClose} message={errorMessage} />;
    }
  };

  const disabledButton = () => {
    const errorsExists = Object.keys(formik.errors).length !== 0;
    const values = Object.values(formik.values).filter((v) => v === "");
    const valuesNotFilled = values.length !== Object.keys(formik.values).length;

    return errorsExists && valuesNotFilled;
  };

  const buttonClassName = classNames(
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    {
      "disabled:opacity-50": disabledButton(),
    }
  );

  return (
    <>
      {error && renderErrorNotification()}
      {loading && <LoadingOverlay />}

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <EmailInput formik={formik} />

              <PasswordInput formik={formik} />

              <PasswordInput formik={formik} asConfirmation />

              <button
                type="submit"
                className={buttonClassName}
                disabled={disabledButton()}
              >
                Create account
              </button>
            </form>

            <div className="mt-6">
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a
                    href="/sign-in"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in instead
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-1 grid grid-cols-1 gap-1">
                <div>
                  <button
                    type="submit"
                    onClick={onSignInWithGoogle}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Create with Gmail</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      />
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      />
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      />
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      />
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
