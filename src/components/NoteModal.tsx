import { Button, Modal, ModalBody } from "../styles";

interface NoteModalProps {
  setShowNoteModal: React.Dispatch<React.SetStateAction<boolean>>;
  noteBody: string;
}

export default function NoteModal({
  setShowNoteModal,
  noteBody,
}: NoteModalProps): JSX.Element {
  return (
    <>
      <Modal>
        <ModalBody>
          <p>{noteBody}</p>
          <Button
            onClick={() => setShowNoteModal(false)}
            primary={true}
            style={{ position: "absolute", bottom: "20px", right: "30px" }}
          >
            Close
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
}
