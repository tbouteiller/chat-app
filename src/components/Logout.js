import React from "react";
import { auth } from "../firebase/firebase";

function Logout() {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <button
        onClick={logout}
        className="px-4 py-1 mt-2 bg-white text-blue-600 text-white transition duration-300 transform hover:scale-125 hover:underline"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
