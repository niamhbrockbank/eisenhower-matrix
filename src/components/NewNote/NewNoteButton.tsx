import { Button } from "../../styles";

interface NewNoteButtonProps {
  showManager: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function NewNoteButton({
  showManager,
}: NewNoteButtonProps): JSX.Element {
  const setShow = showManager[1];
  const handleShow = () => setShow(true);

  return (
    <>
      <Button primary={true} newNote={true} onClick={handleShow} style={{position: 'absolute', zIndex: 300}}>
        New Note
      </Button>
    </>
  );
}
