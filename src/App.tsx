import Home from "./components/Home";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyAy77ZeTHxdhtcxMYUGtJuyd3-kcXY65_4",
  authDomain: "eisenhower-matrix-ff68c.firebaseapp.com",
  projectId: "eisenhower-matrix-ff68c",
  storageBucket: "eisenhower-matrix-ff68c.appspot.com",
  messagingSenderId: "1099432294725",
  appId: "1:1099432294725:web:fed0990ce4228eb9df262c",
});

//Reference to SDKs as global variables
const auth = getAuth(app); //should be firebaseApp as argument
const firestore = getFirestore(app);

function App(): JSX.Element {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <Home auth={auth} />
      ) : (
        <SignIn auth={auth} firestore={firestore} />
      )}
    </>
  );
}

export default App;
