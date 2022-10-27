import { DragEvent } from "react";
import { Note, Offset } from "../types";

export default function handleDragStart(
  event: DragEvent<HTMLDivElement>,
  note: Note,
  setOffset: React.Dispatch<React.SetStateAction<Offset>>
): void {
  note.dragging = true;
  const xOffset = event.clientX - note.position_x;
  const yOffset = event.clientY - note.position_y;
  setOffset({ xOffset, yOffset });
}
