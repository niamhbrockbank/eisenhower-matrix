import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useState } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";

function App(): JSX.Element {
  const forgetAboutItItemsManager = useState<string[]>([]);

  return (
    <>
      <Title />
      <MatrixBackground forgetAboutItItemsManager={forgetAboutItItemsManager} />
      <NewNote forgetAboutItItemsManager={forgetAboutItItemsManager} />
    </>
  );
}

export default App;
