import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useState, MouseEvent } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
// import SketchP5Trial from "./components/SketchP5Trial";
import Title from "./components/Title";

function App(): JSX.Element {
  const forgetAboutItItemsManager = useState<string[]>([]);
  const [state, setState] = useState({message : 'Mouse Event'})

  const handleEvent= (event : MouseEvent) => {
    if (event.type === 'mousedown'){
      setState({message : "Mouse Down"})
    } else {
      setState({message : "Mouse Up"})
    }
  } 

  return (
    <>
      <Title />
      <MatrixBackground forgetAboutItItemsManager={forgetAboutItItemsManager} />
      <NewNote forgetAboutItItemsManager={forgetAboutItItemsManager} />
      {/* <SketchP5Trial /> */}
      <div>{state.message}</div>
      <button onMouseDown={handleEvent} onMouseUp={handleEvent}>Change image</button>
    </>
  );
}

export default App;
