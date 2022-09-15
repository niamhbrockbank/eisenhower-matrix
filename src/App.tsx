import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";

function App(): JSX.Element {
  return (
    <>
      <Title />
      <MatrixBackground />
      <NewNote />
    </>
  );
}

export default App;
