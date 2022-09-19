import styled, { css } from "styled-components";
import { Note } from "../../types";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

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
    const newNote = {id: 10, note_body: "hi new note here", position: {x : 200, y:150}};
    setTempItems([...tempItems, newNote]);
    handleShow()
  }

  return (
    <>
    <StyleButton primary={true} onClick={addNewNote}>
      New Note
    </StyleButton>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
</>
  );
}
