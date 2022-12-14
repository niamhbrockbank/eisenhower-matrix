import axios from "axios";
import { Modal } from "react-bootstrap";
import { Button } from "../../styles";

interface NewNoteModalProps {
  newNoteBodyManager: [string, React.Dispatch<React.SetStateAction<string>>];
  showManager: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  getNotes: () => Promise<void>;
}

export default function NewNoteModal({
  newNoteBodyManager,
  showManager,
  getNotes,
}: NewNoteModalProps): JSX.Element {
  const [newNoteBody, setNewNoteBody] = newNoteBodyManager;
  const [show, setShow] = showManager;

  const handleClose = () => setShow(false);

  async function addNewNote(): Promise<void> {
    try {
      await axios.post("https://priorities-measure.onrender.com/notes", {
        note_body: newNoteBody,
      });
      handleClose();
      setNewNoteBody("");
      await getNotes();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="new_note_modal">
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
          <p style={{ color: "grey", fontSize: "10pt" }}>
            {newNoteBody.length}/100
          </p>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={addNewNote} primary={true}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
