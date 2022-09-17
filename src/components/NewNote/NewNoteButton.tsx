import styled, { css } from "styled-components";

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
  forgetAboutItItemsManager: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ];
}

export default function NewNoteButton({
  forgetAboutItItemsManager,
}: NewNoteButtonProps): JSX.Element {
  const [forgetAboutItItems, setForgetAboutItItems] = forgetAboutItItemsManager;

  function addNewNote(): void {
    const newItem = "hi";
    setForgetAboutItItems([...forgetAboutItItems, newItem]);
  }

  return (
    <Button primary={true} onClick={addNewNote}>
      New Note
    </Button>
  );
}
