import Home from "./components/Home";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy77ZeTHxdhtcxMYUGtJuyd3-kcXY65_4",
  authDomain: "eisenhower-matrix-ff68c.firebaseapp.com",
  projectId: "eisenhower-matrix-ff68c",
  storageBucket: "eisenhower-matrix-ff68c.appspot.com",
  messagingSenderId: "1099432294725",
  appId: "1:1099432294725:web:fed0990ce4228eb9df262c",
  measurementId: "G-QT44XD4FWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

function App(): JSX.Element {
  return (
    <Home />
  );
}

export default App;
