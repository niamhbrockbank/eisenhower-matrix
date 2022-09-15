import generateKey from "../../utils/generateKey";
import { UseStateManager } from "../../utils/useStateManager";

export default function ForgetAboutIt(): JSX.Element {
  const { forgetAboutItItems } = UseStateManager();
  console.log(forgetAboutItItems)

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
