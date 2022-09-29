import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";
import { Note, Offset } from "./types";
import convertNotetoElement from "./utils/convertNoteToElement";

function App(): JSX.Element {
  const [offset, setOffset] = useState<Offset>({ xOffset: 0, yOffset: 0 });
  const [notesArr, setNotesArr] = useState<Note[]>([]);

  const getNotes = useCallback(async () => {
    const response = await axios.get('https://priorities-measure.herokuapp.com/notes')
    setNotesArr(response.data)
  }, [])

  useEffect(() => {
    getNotes()
  }, [getNotes])

  return (
    <>
      <Title />
      <MatrixBackground />
      <NewNote getNotes={getNotes}/>
      {notesArr.length > 1 && notesArr.map((note) =>
        convertNotetoElement(note, notesArr, setNotesArr, offset, setOffset)
      )}
    </>
  );
}

export default App;
