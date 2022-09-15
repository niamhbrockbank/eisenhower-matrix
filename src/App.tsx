import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground";
import Title from "./components/Title";

function App(): JSX.Element {
  return (
    <>
      <Title />
      <MatrixBackground />
    </>
  );
}

export default App;
