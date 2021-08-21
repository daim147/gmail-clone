import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userReducer";
import { auth, googleProvider } from "../../Firebase";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(({ user }) =>
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      )
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="secondary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
