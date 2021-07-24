import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase/firebase";
import Message from "./Message";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scroller = useRef();

  useEffect(() => {
    const unsubscribe = db
      .collection("messages")
      .limit(40)
      .orderBy("date", "asc")
      .onSnapshot(
        (snapshot) => {
          const data = [];
          snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
          setIsLoading(false);
          setMessages(data);
        },
        (error) => {
          alert(error.message);
        }
      );
    return unsubscribe;
  }, []);

  const deleteMessage = (id) => {
    db.collection("messages").doc(id).delete();
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {messages.map(({ id, photoURL, name, text, uid, date }) => (
        <div key={id}>
          <div
            className={`flex flex-col rounded-lg p-1 mt-2 mb-2 break-words w-64 bg-gray-50 ${
              uid === auth.currentUser.uid
                ? `bg-blue-200 ml-20`
                : `bg-green-200`
            }`}
          >
            <div className="flex items-center">
              <img
                src={photoURL}
                alt="profile"
                className="w-7 rounded-full mr-2"
              ></img>
              <p className="font-medium">{name}</p>
            </div>

            <p>{text}</p>
            <div className="flex items-center justify-between mt-1">
              <svg
                onClick={() =>
                  uid === auth.currentUser.uid ? deleteMessage(id) : undefined
                }
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 cursor-pointer transform hover:scale-110 transition 500 ${
                  uid !== auth.currentUser.uid && `invisible`
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EF4444"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-xs">
                {date.toDate().toLocaleTimeString().slice(0, 5) +
                  date.toDate().toLocaleTimeString().slice(8, 11)}
              </p>
            </div>
          </div>
        </div>
      ))}
      <Message scroller={scroller} />
      <div ref={scroller}></div>
    </>
  );
}

export default ChatWindow;
