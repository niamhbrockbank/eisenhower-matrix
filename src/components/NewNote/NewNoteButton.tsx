import styled, { css } from "styled-components";
import { Note } from "../../types";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

const Button = styled.button<{ primary?: boolean, newNote? : boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #9967b6;
  color: #9967b6;
  padding: 0.35em 1.5em;

  ${(props) =>
    props.primary &&
    css`
      background: #9967b6;
      color: white;
    `}

  ${(props) =>
    props.newNote &&
    css`
      position: fixed;
      top: 15px;
      right: 30px;
      margin: 0.5em 1em;
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
    const newNote = {id: newId, note_body: `${newNoteBody}`, position: {x : 880, y:100}};
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
