import { Note, Offset } from "../types";
import handleDragEnd from "./handleDragEnd";
import handleDragStart from "./handleDragStart";

export default function convertNotetoElement(
  note: Note,
  tempItemsState: Note[],
  setTempItemsState: React.Dispatch<React.SetStateAction<Note[]>>,
  offset: Offset,
  setOffset: React.Dispatch<React.SetStateAction<Offset>>
): JSX.Element {
  return (
    <div
      key={note.id}
      className="note_div"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, note, setOffset)}
      onDragEnd={(e) =>
        handleDragEnd(e, note.id, tempItemsState, setTempItemsState, offset)
      }
      style={{
        position: "absolute",
        left: `${note.position.x}px`,
        top: `${note.position.y}px`,
      }}
    >
      {note.note_body}
    </div>
  );
}
