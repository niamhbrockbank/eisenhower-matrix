import axios from "axios"

export default async function deleteNote(note_id : number): Promise<void> {
    await axios.delete('https://priorities-measure.herokuapp.com/notes', {data : {note_id : note_id}})
}