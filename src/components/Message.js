import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import Logout from "./Logout";

function Message(props) {
  const [message, setMessage] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;

    await db.collection("messages").add({
      name: displayName,
      text: message,
      photoURL,
      uid,
      date: new Date(),
    });
    setMessage("");
    props.scroller.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="border-t-2 border-gray-600 py-4 px-10 mt-4">
      <form onSubmit={sendMessage}>
        <input
          className="border-2 border-gray-300 bg-gray-50 mr-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message.."
          required
        ></input>
        <button className="rounded-md px-4 py-1 bg-blue-600 text-white hover:bg-blue-500 transform hover:scale-110 transition duration-500">
          Send
        </button>
      </form>
      <div className="m-auto w-1/2">
        <Logout />
      </div>
    </div>
  );
}

export default Message;
