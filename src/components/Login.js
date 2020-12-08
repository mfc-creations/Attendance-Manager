import React from "react";
import firebase from "./firebase";
import Gl from "../assets/google.png";
import { useHistory } from "react-router-dom";
import "./Style.css";
import LoginImage from "../assets/login_illustration2.jpg";
import TextField from "./common/texts/Text";
const Login = () => {
  const history = useHistory("");
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        history.push("/department");
        // ...
      })
      .catch(function (error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
        console.log(error);
      });
  };
  return (
    <div className="main-body">
      <img
        src={LoginImage}
        alt=""
        style={{ marginTop: "10vw" }}
        className="bg-img"
      />
      <TextField text="Login to start" type="head-text" mb={24} mt={24} />

      <button onClick={onSubmit} className="google-button">
        <img src={Gl} alt="" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default Login;
