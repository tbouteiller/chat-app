import Login from "./Login";
import ChatWindow from "./ChatWindow";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`flex flex-col
    items-center justify-center ${user ? `mt-20` : `mt-60`}`}
    >
      <img src="../chat-app-logo.png" alt="logo" className="w-60 mb-10"></img>
      {user ? <ChatWindow /> : <Login />}
    </div>
  );
}

export default App;
