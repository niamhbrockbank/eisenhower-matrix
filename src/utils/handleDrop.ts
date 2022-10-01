import { MouseEvent } from "react"

export default function handleDrop(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
  }