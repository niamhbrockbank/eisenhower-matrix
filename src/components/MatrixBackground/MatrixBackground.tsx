import Delegate from "./Delegate";
import DoFirst from "./DoFirst";
import ForgetAboutIt from "./ForgetAboutIt";
import Schedule from "./Schedule";

export default function MatrixBackground(): JSX.Element {
  return (
    <div className="grid_box">
      <DoFirst />
      <Schedule />
      <Delegate />
      <ForgetAboutIt />
    </div>
  );
}
