import { Button } from "../styles";
import Modal from "react-bootstrap/Modal";

interface NoteModalProps {
  setShowNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  noteBody: string;
  show: boolean;
}

export default function NoteModal({
  setShowNoteModal,
  noteBody,
  show,
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
          <Modal.Footer>
            <Button onClick={() => setShowNoteModal(false)} primary={true}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
