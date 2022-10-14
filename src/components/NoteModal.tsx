import { Button } from "../styles";
import Modal from "react-bootstrap/Modal"

interface NoteModalProps {
  setShowNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  noteBody: string;
  show : boolean;
}

export default function NoteModal({
  setShowNoteModal,
  noteBody,
  show
}: NoteModalProps): JSX.Element {
  return (
    <>
      <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Body>
          <p>{noteBody}</p>
          <Button
            onClick={() => setShowNoteModal(false)}
            primary={true}
            style={{ position: "absolute", bottom: "20px", right: "30px" }}
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
