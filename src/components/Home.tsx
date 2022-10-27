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

//socket.io setup
import io from "socket.io-client";
import handleDrop from "../utils/handleDrop";
import handleDragOver from "../utils/handleDragOver";
const socket = io("https://priorities-measure.herokuapp.com/");

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

  useEffect(() => {
    socket.on("Get all notes", (allClientsNotes) => {
      setNotesArr(allClientsNotes);
    });
    return () => {
      socket.off("Get all notes");
    };
  }, []);

  async function signOutGoogle() {
    await signOut(auth);
  }

  return (
    <>
      <Title />
      <NewNote setNotesArr={setNotesArr} getNotes={getNotes}/>
      <Button signOut={true} onClick={() => signOutGoogle()} style={{position: 'absolute', zIndex: 300}}>
        Sign Out
      </Button>
      <div
        id="drop_area"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
      >
        <MatrixBackground
          getNotes={getNotes}
          notesArr={notesArr}
          setNotesArr={setNotesArr}
        />
      </div>
    </>
  );
}
