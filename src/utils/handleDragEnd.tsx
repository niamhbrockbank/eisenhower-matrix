import { Note, Offset } from "../types";
import { MouseEvent } from "react";
import updateNoteInDB from "./updateNoteInDB";

export default function handleDragEnd(
  e: MouseEvent,
  draggedId: number,
  notesArr: Note[],
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>,
  offset: Offset
): void {
  e.preventDefault();
  const { xOffset, yOffset } = offset;

  const copyOfNotes = [...notesArr];
  const draggedIndex = copyOfNotes.findIndex((note) => note.note_id === draggedId);

  const newXPosition = e.clientX - xOffset;
  const newYPosition = e.clientY - yOffset;

  copyOfNotes[draggedIndex].position_x = newXPosition;
  copyOfNotes[draggedIndex].position_y = newYPosition;
  updateNoteInDB(copyOfNotes[draggedIndex])
  setNotesArr(copyOfNotes);
}
