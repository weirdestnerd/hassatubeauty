import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { signIn, googleSignIn } from "../../firebase";
// import EmailInput from "../form/EmailInput";
// import PasswordInput from "../form/PasswordInput";
import LoadingOverlay from "../loading/LoadingOverlay";
import Notification from "../alerts/Notification";
import { useSignedInUser } from "../../hooks/UserHook";
import Logo from "../Logo";
import EmailInput from "../form/EmailInput";
import PasswordInput from "../form/PasswordInput";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useSignedInUser();

  useEffect(() => {
    if (user) navigate(-1);
  }, [user]);

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    signIn(values.email, values.password)
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
    initialValues: { email: "", password: "" },
    validationSchema: SignInSchema,
    onSubmit,
  });

  const renderErrorNotification = () => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const onClose = () => setError(null);

    switch (errorCode) {
      case "auth/wrong-password":
        return (
          <Notification
            onClose={onClose}
            message="Wrong password"
            description="Please check the password you've entered."
          />
        );
      case "auth/user-not-found":
        return (
          <Notification
            onClose={onClose}
            message="No account found"
            description="We couldn't find any account for your email"
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <EmailInput formik={formik} />

              <PasswordInput formik={formik} />

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/forgot-password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className={buttonClassName}
                disabled={disabledButton()}
              >
                Sign in
              </button>
            </form>

            <div className="mt-6">
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a
                    href="/create-account"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Create an account instead
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

              <div className="mt-3 grid grid-cols-1 gap-1">
                <div>
                  <button
                    type="submit"
                    onClick={onSignInWithGoogle}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Gmail</span>
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

export default SignIn;
