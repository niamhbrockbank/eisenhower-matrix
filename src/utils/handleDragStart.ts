import { DragEvent} from "react"
import { Note, Offset } from "../types"

export default function handleDragStart(event : DragEvent<HTMLDivElement>, note : Note, setOffset : React.Dispatch<React.SetStateAction<Offset>>): void{
    const xOffset = event.clientX - note.position.x
    const yOffset = event.clientY - note.position.y
    setOffset({xOffset, yOffset}) 
}