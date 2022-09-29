import { useState } from "react";
import { Button } from "../styles";
import { Note, Offset } from "../types";
import deleteNote from "./deleteNote";
import handleDragEnd from "./handleDragEnd";
import handleDragStart from "./handleDragStart";

interface ConvertNoteToElementProps {
  note: Note,
  notesArr: Note[],
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>,
  offset: Offset,
  setOffset: React.Dispatch<React.SetStateAction<Offset>>,
}

export default function ConvertNotetoElement({
  note,
  notesArr,
  setNotesArr,
  offset,
  setOffset
} : ConvertNoteToElementProps): JSX.Element {

  const [deleteButtonShown, setDeleteButtonShown] = useState(false)
  const [hoverOverNoteId, setHoverOverNoteId] = useState<number>(NaN)

  return (
    <div
      key={note.note_id}
      className="note_div"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, note, setOffset)}
      onDragEnd={(e) =>
        handleDragEnd(e, note.note_id, notesArr, setNotesArr, offset)
      }
      onMouseEnter={() => {setDeleteButtonShown(true); setHoverOverNoteId(note.note_id)}}
      onMouseLeave={() => {setDeleteButtonShown(false); setHoverOverNoteId(NaN)}}
      style={{
        position: "absolute",
        left: `${note.position_x}px`,
        top: `${note.position_y}px`,
      }}
    >
      {note.note_body}
      {deleteButtonShown && <Button onClick={() => deleteNote(hoverOverNoteId)}>Delete</Button>}
    </div>
  );
}
