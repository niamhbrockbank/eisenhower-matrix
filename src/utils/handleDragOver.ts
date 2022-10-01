import { MouseEvent } from "react";

export default function handleDragOver(event: MouseEvent): void {
  // event.stopPropagation();
  event.preventDefault();
}
