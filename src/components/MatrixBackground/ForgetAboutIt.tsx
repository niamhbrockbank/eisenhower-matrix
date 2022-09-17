interface ForgetAboutItProps {
  forgetAboutItItemsManager: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ];
}

export default function ForgetAboutIt({
  forgetAboutItItemsManager,
}: ForgetAboutItProps): JSX.Element {
  const [forgetAboutItItems, setForgetAboutItItems] = forgetAboutItItemsManager;

  const tempItems = [
    { id: "1", note: "do something" },
    { id: "2", note: "do something else" },
    { id: "3", note: "hi" },
    { id: "4", note: "working?" },
  ];
  // useEffect(() => {
  //   console.log(`you have ${forgetAboutItItems.length} items`);
  // }, [setForgetAboutItItems, forgetAboutItItems]);

  return (
    <div className="grid">
      Forget about it
    </div>
  );
}
