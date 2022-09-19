import styled, { css } from "styled-components";
import { Note } from "../../types";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { Button } from "react-bootstrap";

const StyleButton = styled.button<{ primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9967b6;
  color: #9967b6;
  margin: 0.5em 1em;
  padding: 0.35em 1.5em;
  position: fixed;
  bottom: 30px;
  right: 30px;

  ${(props) =>
    props.primary &&
    css`
      background: #9967b6;
      color: white;
    `}
`;

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
    const newNote = {id: newId, note_body: `${newNoteBody}`, position: {x : 200, y:150}};
    setTempItems([...tempItems, newNote]);
    handleClose()
    setNewNoteBody("")
  }

  const [newNoteBody, setNewNoteBody] = useState("")

  return (
    <>
    <StyleButton primary={true} onClick={handleShow}>
      New Note
    </StyleButton>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input 
          type='text' 
          placeholder="Write new note here..." 
          value={newNoteBody}
          onChange={(e) => setNewNoteBody(e.target.value)}>
        </input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Close
        </Button>
        <Button onClick={addNewNote}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
</>
  );
}
