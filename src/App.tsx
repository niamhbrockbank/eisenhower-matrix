import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import Task from "./components/Task";
import "./App.css";

function App(): JSX.Element {
  return (
    <>
      <Task />
      <Task />
      <Task />
      <Task />
      <div className="grid_box">
        <div className="grid">Do first</div>
        <div className="grid">Schedule</div>
        <div className="grid">Delegate</div>
        <div className="grid">Forget about it</div>
      </div>
    </>
  );
}

export default App;
