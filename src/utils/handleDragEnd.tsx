import { Note, Offset } from "../types";
import { MouseEvent } from "react";
import axios from "axios";

export default function handleDragEnd(
  e: MouseEvent,
  draggedId: number,
  notesArr: Note[],
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>,
  offset: Offset,
  getNotes: () => Promise<void>
): void {
  e.preventDefault();

  async function updateNoteInDB(
    note: Note,
    copyOfNotes: Note[]
  ): Promise<void> {
    note.dragging = false;
    const { note_id, note_body, position_x, position_y } = note;

    const putRequestBody = {
      note: {
        note_id: note_id,
        note_body: note_body,
        position: {
          x: position_x,
          y: position_y,
        },
      },
    };

    await axios.put(
      "https://priorities-measure.herokuapp.com/notes",
      putRequestBody
    );
    setNotesArr(copyOfNotes);
    await getNotes();
  }

  const { xOffset, yOffset } = offset;

  const copyOfNotes = [...notesArr];
  const draggedIndex = copyOfNotes.findIndex(
    (note) => note.note_id === draggedId
  );

  const newXPosition = e.clientX - xOffset;
  const newYPosition = e.clientY - yOffset;

  copyOfNotes[draggedIndex].position_x = newXPosition;
  copyOfNotes[draggedIndex].position_y = newYPosition;
  updateNoteInDB(copyOfNotes[draggedIndex], copyOfNotes);
}
