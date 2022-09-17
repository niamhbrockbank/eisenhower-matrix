import Delegate from "./Delegate";
import DoFirst from "./DoFirst";
import ForgetAboutIt from "./ForgetAboutIt";
import Schedule from "./Schedule";

interface MatrixBackgroundProps {
  forgetAboutItItemsManager: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ];
}

export default function MatrixBackground({
  forgetAboutItItemsManager,
}: MatrixBackgroundProps): JSX.Element {
  return (
    <div className="grid_box">
      <DoFirst />
      <Schedule />
      <Delegate />
      <ForgetAboutIt forgetAboutItItemsManager={forgetAboutItItemsManager} />
    </div>
  );
}
