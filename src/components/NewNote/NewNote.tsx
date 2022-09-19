import { useState } from "react";
import { Note } from "../../types";
import NewNoteButton from "./NewNoteButton";
import NewNoteModal from "./NewNoteModal";

interface NewNoteProps {
  notesManager: [Note[], React.Dispatch<React.SetStateAction<Note[]>>];
}

export default function NewNote({ notesManager }: NewNoteProps): JSX.Element {
  const showManager = useState(false);

  const newNoteBodyManager = useState("");

  return (
    <>
      <NewNoteButton showManager={showManager} />
      <NewNoteModal
        notesManager={notesManager}
        newNoteBodyManager={newNoteBodyManager}
        showManager={showManager}
      />
    </>
  );
}
