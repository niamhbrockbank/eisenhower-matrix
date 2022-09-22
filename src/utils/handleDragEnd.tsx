import { Note, Offset } from "../types";
import { MouseEvent } from "react";

export default function handleDragEnd(
  e: MouseEvent,
  draggedId: number,
  tempItemsState: Note[],
  setTempItemsState: React.Dispatch<React.SetStateAction<Note[]>>,
  offset: Offset
): void {
  e.preventDefault();
  const { xOffset, yOffset } = offset;

  const copyTempItems = [...tempItemsState];
  const draggedIndex = copyTempItems.findIndex((note) => note.id === draggedId);

  const newXPosition = e.clientX - xOffset;
  const newYPosition = e.clientY - yOffset;

  copyTempItems[draggedIndex].position = { x: newXPosition, y: newYPosition };
  setTempItemsState(copyTempItems);
}
