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
  
  const tempItems : Note[] = [
    { id: 1, note_body: "do something", position : {x : 20, y : 50} },
    { id: 2, note_body: "do something else", position : {x : 200, y : 500} },
    { id: 3, note_body: "hi" , position : {x : 300, y : 75}},
    { id: 4, note_body: "working?", position : {x : 100, y : 50} },
  ];

  const [tempItemsState, setTempItemsState] = useState(tempItems)

  const handleDragEnd = (e : MouseEvent, draggedId : number) => {
    const copyTempItems = [...tempItemsState]
    const draggedIndex = copyTempItems.findIndex(note => note.id === draggedId)
    copyTempItems[draggedIndex].position = {x : e.clientX, y: e.clientX}
    setTempItemsState(copyTempItems)
  }

  const convertNotetoElement = (note : Note) : JSX.Element => {
    return (
      <div 
        key={note.id} 
        className='draggable' 
        draggable='true'
        onDragEnd={(e) => handleDragEnd(e, note.id)}
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

      <div id='easy_test' className='draggable' draggable='true'>this will be draggable</div>
      {tempItemsState.map(convertNotetoElement)}
    </>
  );
}

export default App;
