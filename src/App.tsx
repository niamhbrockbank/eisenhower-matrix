import Home from "./components/Home";
import {initializeApp} from "firebase/app";
import { 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut
} from "firebase/auth";

import {useAuthState} from 'react-firebase-hooks/auth'

import { Button } from "./styles";

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyAy77ZeTHxdhtcxMYUGtJuyd3-kcXY65_4",
  authDomain: "eisenhower-matrix-ff68c.firebaseapp.com",
  projectId: "eisenhower-matrix-ff68c",
  storageBucket: "eisenhower-matrix-ff68c.appspot.com",
  messagingSenderId: "1099432294725",
  appId: "1:1099432294725:web:fed0990ce4228eb9df262c"
})

//Reference to SDKs as global variables
const auth = getAuth(app); //should be firebaseApp as argument
const firestore = getFirestore(app);

function App(): JSX.Element {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <Home />
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;

export function SignIn():JSX.Element {
  const provider = new GoogleAuthProvider()

  const signInWithGoogle = async() => {
    try {
      const response = await signInWithPopup(auth, provider)
      const user = response.user
      const q = query(collection(firestore, "users"), where("uid", "==", user.uid))
      const docs = await getDocs(q)

      if (docs.docs.length === 0){
        await addDoc(collection(firestore, "users"), {
          uid: user.uid,
          name : user.displayName,
          authProvider : "google",
          email : user.email,
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button primary={true} onClick={signInWithGoogle}>
          Sign in with Google
    </Button>
  )

}
