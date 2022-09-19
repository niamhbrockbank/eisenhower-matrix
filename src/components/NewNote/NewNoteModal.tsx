import { Modal } from "react-bootstrap";
import { Button } from "../../styles";
import { Note } from "../../types";

interface NewNoteModalProps {
  notesManager: [Note[], React.Dispatch<React.SetStateAction<Note[]>>];
  newNoteBodyManager: [string, React.Dispatch<React.SetStateAction<string>>];
  showManager: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function NewNoteModal({
  notesManager,
  newNoteBodyManager,
  showManager,
}: NewNoteModalProps): JSX.Element {
  const [notesArr, setNotesArr] = notesManager;
  const [newNoteBody, setNewNoteBody] = newNoteBodyManager;
  const [show, setShow] = showManager;

  const handleClose = () => setShow(false);

  function addNewNote(): void {
    const newId = notesArr.length + 1;
    const newNote = {
      id: newId,
      note_body: `${newNoteBody}`,
      position: { x: 465, y: 540 },
    };
    setNotesArr([...notesArr, newNote]);
    handleClose();
    setNewNoteBody("");
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Write here..."
          value={newNoteBody}
          onChange={(e) => setNewNoteBody(e.target.value)}
          style={{ width: "465px", border: "none" }}
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={addNewNote} primary={true}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
