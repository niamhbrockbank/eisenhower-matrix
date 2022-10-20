import Home from "./components/Home";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Button } from "./styles";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAy77ZeTHxdhtcxMYUGtJuyd3-kcXY65_4",
//   authDomain: "eisenhower-matrix-ff68c.firebaseapp.com",
//   projectId: "eisenhower-matrix-ff68c",
//   storageBucket: "eisenhower-matrix-ff68c.appspot.com",
//   messagingSenderId: "1099432294725",
//   appId: "1:1099432294725:web:fed0990ce4228eb9df262c",
//   measurementId: "G-QT44XD4FWS",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

function App(): JSX.Element {
  const [signedIn, setSignedIn] = useState(false);

  function signUserIn() {
    // auth.signInWithPopup(provider);
    //auth.signOut //for sign out

    setSignedIn(true);
  }

  // auth.onAuthStateChanged(user => {
  //   if (user) {
  //     setSignedIn(false)
  //     //user.displayName (set to empty string if doesn't exist)
  //   } else {
  //     setSignedIn(true)
  //   }
  // })

  return (
    <>
      {signedIn ? (
        <Home />
      ) : (
        <Button primary={true} onClick={signUserIn}>
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export default App;
