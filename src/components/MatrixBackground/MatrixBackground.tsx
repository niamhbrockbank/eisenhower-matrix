import Delegate from "./Delegate";
import DoFirst from "./DoFirst";
import ForgetAboutIt from "./ForgetAboutIt";
import Schedule from "./Schedule";
import { MouseEvent } from "react";

export default function MatrixBackground(): JSX.Element {

  function handleDrop(event : MouseEvent) {
    event.stopPropagation();
  }

  function handleDragOver(event : MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    }

  return (
    <div className="grid_box" onDrop={handleDrop} onDragOver={handleDragOver}>
      <DoFirst />
      <Schedule />
      <Delegate />
      <ForgetAboutIt />
    </div>
  );
}
