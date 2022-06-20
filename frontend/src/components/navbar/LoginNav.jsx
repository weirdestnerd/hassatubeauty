import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignedInUser } from "../../hooks/UserHook";
import { logOut } from "../../firebase";

function LoginNav() {
  const user = useSignedInUser();
  const navigate = useNavigate();

  const onLogOut = () => {
    logOut().finally(() => navigate("/"));
  };

  const renderContent = () => {
    if (user) {
      return (
        <button
          type="submit"
          onClick={onLogOut}
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Sign out
        </button>
      );
    }

    return (
      <>
        <a
          href="/sign-in"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Sign in
        </a>
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
        <a
          href="/create-account"
          className="text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Create account
        </a>
      </>
    );
  };

  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      {renderContent()}
    </div>
  );
}

export default LoginNav;
