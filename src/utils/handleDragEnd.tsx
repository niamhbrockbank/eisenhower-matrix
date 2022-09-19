import { Note } from "../types";
import { MouseEvent } from "react";

export default function handleDragEnd(e: MouseEvent, draggedId: number, tempItemsState :Note[], setTempItemsState : React.Dispatch<React.SetStateAction<Note[]>>): void {
    const copyTempItems = [...tempItemsState];
    const draggedIndex = copyTempItems.findIndex(
      (note) => note.id === draggedId
    );
    copyTempItems[draggedIndex].position = { x: e.clientX, y: e.clientY };
    setTempItemsState(copyTempItems);
  }