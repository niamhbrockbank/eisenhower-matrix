import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useState, MouseEvent } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";

function App(): JSX.Element {
  const forgetAboutItItemsManager = useState<string[]>([]);

  const handleDrag = (e : MouseEvent) => {
    console.log("X: " + e.clientX + " | Y: " + e.clientY)
  }

  return (
    <>
      <Title />
      <MatrixBackground forgetAboutItItemsManager={forgetAboutItItemsManager} />
      <NewNote forgetAboutItItemsManager={forgetAboutItItemsManager} />

      <div id='draggable' draggable='true' onDrag={handleDrag}>this will be draggable</div>
    </>
  );
}

export default App;
