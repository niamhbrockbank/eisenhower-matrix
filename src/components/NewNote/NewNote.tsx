import { Note } from "../../types";
import NewNoteButton from "./NewNoteButton";

interface NewNoteProps {
  tempItemsManager :[
    Note[],
    React.Dispatch<React.SetStateAction<Note[]>>
  ];
}

export default function NewNote({
  tempItemsManager
}: NewNoteProps): JSX.Element {
  return (
    <>
      <NewNoteButton tempItemsManager={tempItemsManager}/>
    </>
  );
}
