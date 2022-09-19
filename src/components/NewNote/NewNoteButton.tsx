import styled, { css } from "styled-components";
import { Note } from "../../types";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

const Button = styled.button<{ primary?: boolean }>`
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
    <Button primary={true} onClick={addNewNote}>
      New Note
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Close
        </Button>
        <Button primary={true} onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
</>
  );
}
