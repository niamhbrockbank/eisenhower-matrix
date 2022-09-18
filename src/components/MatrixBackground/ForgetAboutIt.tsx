interface ForgetAboutItProps {
  forgetAboutItItemsManager: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ];
}

export default function ForgetAboutIt({
  forgetAboutItItemsManager,
}: ForgetAboutItProps): JSX.Element {
  // const [forgetAboutItItems] = forgetAboutItItemsManager;

  return <div className="grid">Forget about it</div>;
}
