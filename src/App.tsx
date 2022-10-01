import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useCallback, useEffect, useState, MouseEvent } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";
import { Note } from "./types";
import handleDragOver from "./utils/handleDragOver";
import handleDrop from "./utils/handleDrop";

function App(): JSX.Element {
  const [notesArr, setNotesArr] = useState<Note[]>([]);

  const getNotes = useCallback(async () => {
    const response = await axios.get(
      "https://priorities-measure.herokuapp.com/notes"
    );
    setNotesArr(response.data);
  }, []);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <>
      <Title />
      <NewNote getNotes={getNotes}/>
      <div id='drop_area'>
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
