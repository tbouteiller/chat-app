import React from "react";
import firebase from "firebase";
import { auth } from "../firebase/firebase";

function Login() {
  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div>
      <button
        onClick={login}
        className="rounded-md px-4 py-1 bg-blue-600 text-white hover:bg-blue-500 transform hover:scale-110 transition duration-500"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;
