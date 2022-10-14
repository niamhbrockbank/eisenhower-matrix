import { useState } from "react";
import { Note } from "../../types";
import NewNoteButton from "./NewNoteButton";
import NewNoteModal from "./NewNoteModal";

interface NewNoteProps {
  setNotesArr : React.Dispatch<React.SetStateAction<Note[]>>,
  getNotes : () => Promise<void>
}

export default function NewNote({ setNotesArr, getNotes }: NewNoteProps): JSX.Element {
  const showManager = useState(false);
  const newNoteBodyManager = useState("");

  return (
    <div id="new_note">
      <NewNoteButton showManager={showManager} />
      <NewNoteModal
        newNoteBodyManager={newNoteBodyManager}
        showManager={showManager}
        getNotes={getNotes}
      />
    </div>
  );
}
