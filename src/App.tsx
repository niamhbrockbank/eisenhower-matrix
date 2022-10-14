import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";
import { Note } from "./types";

function App(): JSX.Element {
  const [notesArr, setNotesArr] = useState<Note[]>([]);

  const getNotes = useCallback(async () => {
    const response = await axios.get(
      "https://priorities-measure.herokuapp.com/notes"
    );
    setNotesArr(response.data);
    console.log('get notes called')
  }, [setNotesArr]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      <Title />
      <NewNote setNotesArr={setNotesArr} getNotes={getNotes}/>
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

export default App;
