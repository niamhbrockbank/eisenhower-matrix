import { MouseEvent } from "react";

export default function handleDrop(event: MouseEvent): void {
  event.stopPropagation();
  event.preventDefault();
}
