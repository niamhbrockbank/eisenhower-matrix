import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";
import { useState, MouseEvent } from "react";
import "./App.css";
import MatrixBackground from "./components/MatrixBackground/MatrixBackground";
import NewNote from "./components/NewNote/NewNote";
import Title from "./components/Title";

interface Note{
  id : number,
  note_body : string,
  position : {
    x :number,
    y : number
  }
}

function App(): JSX.Element {
  const forgetAboutItItemsManager = useState<string[]>([]);

  const handleDragEnd = (e : MouseEvent) => {
    console.log("X: " + e.clientX + " | Y: " + e.clientY)
  }

  const tempItems : Note[] = [
    { id: 1, note_body: "do something", position : {x : 20, y : 50} },
    { id: 2, note_body: "do something else", position : {x : 200, y : 500} },
    { id: 3, note_body: "hi" , position : {x : 300, y : 75}},
    { id: 4, note_body: "working?", position : {x : 100, y : 50} },
  ];

  const convertNotetoElement = (note : Note) : JSX.Element => {
    return (
      <div 
        key={note.id} 
        className='draggable' 
        draggable='true'
        style={{position : 'absolute',
                left : `${note.position.x}px`,
                top : `${note.position.y}px`}}>
          {note.note_body}
      </div>
      )
  }

  return (
    <>
      <Title />
      <MatrixBackground forgetAboutItItemsManager={forgetAboutItItemsManager} />
      <NewNote forgetAboutItItemsManager={forgetAboutItItemsManager} />

      <div id='easy_test' className='draggable' draggable='true' onDragEnd={handleDragEnd}>this will be draggable</div>
      {tempItems.map(convertNotetoElement)}
    </>
  );
}

export default App;
