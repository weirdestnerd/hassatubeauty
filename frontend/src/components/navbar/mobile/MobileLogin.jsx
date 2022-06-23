import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignedInUser } from "../../../hooks/UserHook";
import { logOut } from "../../../firebase";

function MobileLogin() {
  const user = useSignedInUser();
  const navigate = useNavigate();

  const onLogOut = () => {
    logOut().finally(() => navigate("/"));
  };

  const renderContent = () => {
    if (user) {
      return (
        <div className="flow-root">
          <button
            type="submit"
            onClick={onLogOut}
            className="-m-2 p-2 block font-medium text-gray-900"
          >
            Sign out
          </button>
        </div>
      );
    }

    return (
      <>
        <div className="flow-root">
          <a
            href="/sign-in"
            className="-m-2 p-2 block font-medium text-gray-900"
          >
            Sign in
          </a>
        </div>
        <div className="flow-root">
          <a
            href="/create-account"
            className="-m-2 p-2 block font-medium text-gray-900"
          >
            Create account
          </a>
        </div>
      </>
    );
  };

  return (
    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
      {renderContent()}
    </div>
  );
}

export default MobileLogin;
