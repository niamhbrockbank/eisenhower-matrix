import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useCallback, useEffect, useState } from "react";
import "../App.css";
import MatrixBackground from "./MatrixBackground/MatrixBackground";
import NewNote from "./NewNote/NewNote";
import Title from "./Title";
import { Note } from "../types";
import { Button } from "../styles";
import { Auth, signOut } from "firebase/auth";

interface HomeProps {
  auth: Auth;
}

export default function Home({ auth }: HomeProps): JSX.Element {
  const [notesArr, setNotesArr] = useState<Note[]>([]);

  const getNotes = useCallback(async () => {
    const response = await axios.get(
      "https://priorities-measure.herokuapp.com/notes"
    );
    setNotesArr(response.data);
  }, [setNotesArr]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  async function signOutGoogle() {
    await signOut(auth);
  }

  return (
    <>
      <Title />
      <NewNote setNotesArr={setNotesArr} getNotes={getNotes} />
      <Button signOut={true} onClick={() => signOutGoogle()}>
        Sign Out
      </Button>
      <div id="drop_area">
        <MatrixBackground
          getNotes={getNotes}
          notesArr={notesArr}
          setNotesArr={setNotesArr}
        />
      </div>
    </>
  );
}
