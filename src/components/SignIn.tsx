import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  Firestore,
} from "firebase/firestore";
import { Button } from "../styles";

interface SignInProps {
  auth: Auth;
  firestore: Firestore;
}

export default function SignIn({ auth, firestore }: SignInProps): JSX.Element {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const q = query(
        collection(firestore, "users"),
        where("uid", "==", user.uid)
      );
      const docs = await getDocs(q);

      if (docs.docs.length === 0) {
        await addDoc(collection(firestore, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="sign_in_background">
      <div id="sign_in_modal">
        <h1>Priorities Matrix</h1>
        <p>
          Sign in to keep track of your notes and organise them by urgency and
          importance.
        </p>
        <Button id="sign_in" primary={true} onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
