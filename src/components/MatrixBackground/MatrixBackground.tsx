import { Note } from "../../types";
import handleDragOver from "../../utils/handleDragOver";
import handleDrop from "../../utils/handleDrop";
import NoteElement from "../NoteElement";
import Delegate from "./Delegate";
import DoFirst from "./DoFirst";
import ForgetAboutIt from "./ForgetAboutIt";
import Schedule from "./Schedule";

interface MatrixBackgroundProps {
  getNotes: () => Promise<void>;
  notesArr: Note[];
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>;
}

export default function MatrixBackground({
  getNotes,
  notesArr,
  setNotesArr,
}: MatrixBackgroundProps): JSX.Element {
  return (
    <div
      className="grid_box"
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
    >
      <DoFirst />
      <Schedule />
      <Delegate />
      <ForgetAboutIt />
      {notesArr.map((note) => (
        <NoteElement
          key={note.note_id}
          note={note}
          notesArr={notesArr}
          setNotesArr={setNotesArr}
          getNotes={getNotes}
        />
      ))}
    </div>
  );
}
