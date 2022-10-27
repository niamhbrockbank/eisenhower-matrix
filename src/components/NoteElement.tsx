import { useState } from "react";
import { DeleteButton } from "../styles";
import { Note, Offset } from "../types";
import deleteNote from "../utils/deleteNote";
import handleDragEnd from "../utils/handleDragEnd";
import handleDragStart from "../utils/handleDragStart";
import NoteModal from "./NoteModal";

interface NoteElementProps {
  note: Note;
  notesArr: Note[];
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>;
  getNotes: () => Promise<void>;
}

export default function NoteElement({
  note,
  notesArr,
  setNotesArr,
  getNotes,
}: NoteElementProps): JSX.Element {
  const [offset, setOffset] = useState<Offset>({ xOffset: 0, yOffset: 0 });
  const [deleteButtonShown, setDeleteButtonShown] = useState(false);
  const [hoverOverNoteId, setHoverOverNoteId] = useState<number>(NaN);
  const [showNoteModal, setShowNoteModal] = useState(false);

  return (
    <li>
      <div
        key={note.note_id}
        className="note_div"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, note, setOffset)}
        onDragEnd={(e) =>
          handleDragEnd(
            e,
            note.note_id,
            notesArr,
            setNotesArr,
            offset,
            getNotes
          )
        }
        onMouseEnter={() => {
          setDeleteButtonShown(true);
          setHoverOverNoteId(note.note_id);
        }}
        onMouseLeave={() => {
          setDeleteButtonShown(false);
          setHoverOverNoteId(NaN);
        }}
        style={{
          position: "absolute",
          left: `${note.position_x}px`,
          top: `${note.position_y}px`,
          opacity: `${note.dragging ? '0.01' : '1'}`
        }}
        onDoubleClick={() => setShowNoteModal(true)}
      >
        {note.note_body.length < 35
          ? note.note_body
          : `${note.note_body.slice(0, 30)}...`}
        {deleteButtonShown && (
          <DeleteButton
            onClick={() => {
              deleteNote(hoverOverNoteId, getNotes);
            }}
          >
            🗑️
          </DeleteButton>
        )}
        <NoteModal
          setShowNoteModal={setShowNoteModal}
          noteBody={note.note_body}
          show={showNoteModal}
        />
      </div>
    </li>
  );
}
