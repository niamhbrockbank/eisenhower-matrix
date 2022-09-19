import { Note } from "../types";
import handleDragEnd from "./handleDragEnd";
import handleDragStart from "./handleDragStart";

export default function convertNotetoElement(note: Note, tempItemsState :Note[], setTempItemsState : React.Dispatch<React.SetStateAction<Note[]>>): JSX.Element {
    return (
      <div
        key={note.id}
        className="draggable"
        draggable="true"
        onDragEnd={(e) => handleDragEnd(e, note.id, tempItemsState, setTempItemsState)}
        onDragStart={handleDragStart}
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