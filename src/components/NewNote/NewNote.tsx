import NewNoteButton from "./NewNoteButton";

interface NewNoteProps {
  forgetAboutItItemsManager: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ];
}

export default function NewNote({
  forgetAboutItItemsManager,
}: NewNoteProps): JSX.Element {
  return (
    <>
      <NewNoteButton forgetAboutItItemsManager={forgetAboutItItemsManager} />
    </>
  );
}
