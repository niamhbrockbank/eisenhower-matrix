import { useEffect } from "react";
import generateKey from "../../utils/generateKey";

interface ForgetAboutItProps {
  forgetAboutItItemsManager : [string[], React.Dispatch<React.SetStateAction<string[]>>]
}

export default function ForgetAboutIt({forgetAboutItItemsManager}: ForgetAboutItProps): JSX.Element {
  const [forgetAboutItItems, setForgetAboutItItems] = forgetAboutItItemsManager

  useEffect(() => {
    console.log(`you have ${forgetAboutItItems.length} items`)
  }, [setForgetAboutItItems, forgetAboutItItems])

  return (
    <div className="grid">
      Forget about it
      <ul id="forget_about_it">
        <li>first item</li>
        {forgetAboutItItems.map((item) => (
          <li key={generateKey(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
