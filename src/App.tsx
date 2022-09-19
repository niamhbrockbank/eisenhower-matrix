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
  const forgetAboutItItemsManager = useState<string[]>([]);
  const [offset, setOffset] = useState<Offset>({xOffset : 0, yOffset : 0}) 

  const tempItems: Note[] = [
    { id: 1, note_body: "do something", position: { x: 20, y: 50 } },
    { id: 2, note_body: "do something else", position: { x: 20, y: 50 } },
    { id: 3, note_body: "hi", position: { x: 30, y: 75 } },
    { id: 4, note_body: "working?", position: { x: 10, y: 50 } },
  ];

  const [tempItemsState, setTempItemsState] = useState(tempItems);

  return (
    <>
      <Title />
      <MatrixBackground forgetAboutItItemsManager={forgetAboutItItemsManager} />
      <NewNote forgetAboutItItemsManager={forgetAboutItItemsManager} />
      {tempItemsState.map((note) => convertNotetoElement(note, tempItemsState, setTempItemsState, offset, setOffset))}
    </>
  );
}

export default App;
