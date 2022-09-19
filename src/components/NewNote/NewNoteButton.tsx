import { Note } from "../../types";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Button } from "../../styles";

interface NewNoteButtonProps {
  tempItemsManager :[
    Note[],
    React.Dispatch<React.SetStateAction<Note[]>>
  ];
}

export default function NewNoteButton({
  tempItemsManager
}: NewNoteButtonProps): JSX.Element {
  const [tempItems, setTempItems] = tempItemsManager

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addNewNote(): void {
    const newId = tempItems.length + 1
    const newNote = {id: newId, note_body: `${newNoteBody}`, position: {x : 465, y:540}};
    setTempItems([...tempItems, newNote]);
    handleClose()
    setNewNoteBody("")
  }

  const [newNoteBody, setNewNoteBody] = useState("")

  return (
    <>
    <Button primary={true} newNote={true} onClick={handleShow}>
      New Note
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input 
          type='text' 
          placeholder="Write here..." 
          value={newNoteBody}
          onChange={(e) => setNewNoteBody(e.target.value)}
          style={{width : '465px', border: 'none'}}>
        </input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Close
        </Button>
        <Button onClick={addNewNote} primary={true}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
</>
  );
}
