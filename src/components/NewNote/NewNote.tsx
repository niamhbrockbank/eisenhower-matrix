import { useState } from "react";
import NewNoteButton from "./NewNoteButton";
import NewNoteModal from "./NewNoteModal";

interface NewNoteProps {
  getNotes: () => Promise<void>;
}

export default function NewNote({ getNotes }: NewNoteProps): JSX.Element {
  const showManager = useState(false);
  const newNoteBodyManager = useState("");

  return (
    <div id = 'new_note'>
      <NewNoteButton showManager={showManager} />
      <NewNoteModal
        newNoteBodyManager={newNoteBodyManager}
        showManager={showManager}
        getNotes={getNotes}
      />
    </div>
  );
}
