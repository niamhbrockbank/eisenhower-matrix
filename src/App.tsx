import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useState } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";
import { Note, Offset } from "./types";
import convertNotetoElement from "./utils/convertNoteToElement";

function App(): JSX.Element {
  const [offset, setOffset] = useState<Offset>({xOffset : 0, yOffset : 0}) 

  const fillerNotes: Note[] = [
    { id: 1, note_body: "do something", position: { x: 20, y: 50 } },
    { id: 2, note_body: "do something else", position: { x: 20, y: 50 } },
    { id: 3, note_body: "hi", position: { x: 30, y: 75 } },
    { id: 4, note_body: "working?", position: { x: 10, y: 50 } },
  ];

  const [notesArr, setNotesArr] = useState(fillerNotes);

  return (
    <>
      <Title />
      <MatrixBackground/>
      <NewNote notesManager= {[notesArr, setNotesArr]}/>
      {notesArr.map((note) => convertNotetoElement(note, notesArr, setNotesArr, offset, setOffset))}
    </>
  );
}

export default App;
