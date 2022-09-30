import axios from "axios";
import { Note } from "../types";

export default function updateNoteInDB(note: Note): void {
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

  axios.put("https://priorities-measure.herokuapp.com/notes", putRequestBody);
}
