import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signedInUserState } from "../firebase";

const useSignedInUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    signedInUserState(setUser);
  }, [user]);

  return user;
};

const useRedirectToSignIn = () => {
  const user = useSignedInUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/sign-in");
  }, [user]);
};

export { useSignedInUser, useRedirectToSignIn };
