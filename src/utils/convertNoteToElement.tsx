import { Note, Offset } from "../types";
import handleDragEnd from "./handleDragEnd";
import handleDragStart from "./handleDragStart";

export default function convertNotetoElement(
  note: Note,
  notesArr: Note[],
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>,
  offset: Offset,
  setOffset: React.Dispatch<React.SetStateAction<Offset>>
): JSX.Element {
  return (
    <div
      key={note.note_id}
      className="note_div"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, note, setOffset)}
      onDragEnd={(e) =>
        handleDragEnd(e, note.note_id, notesArr, setNotesArr, offset)
      }
      style={{
        position: "absolute",
        left: `${note.position_x}px`,
        top: `${note.position_y}px`,
      }}
    >
      {note.note_body}
    </div>
  );
}
