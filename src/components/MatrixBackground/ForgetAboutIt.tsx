import { useEffect } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import generateKey from "../../utils/generateKey";

interface ForgetAboutItProps {
  forgetAboutItItemsManager : [string[], React.Dispatch<React.SetStateAction<string[]>>]
}

const getItemStyle = (isDragging : boolean, draggableStyle : any) => ({
  padding : 10,
  margin : `0 50px 15px 50px`,
  background: isDragging ? "blue" : "white",

  ...draggableStyle
})


export default function ForgetAboutIt({forgetAboutItItemsManager}: ForgetAboutItProps): JSX.Element {
  const [forgetAboutItItems, setForgetAboutItItems] = forgetAboutItItemsManager

  const tempItems = [
    {id: '1',
    note: 'do something'
    },
    {id: '2',
    note: 'do something else'
    },
    {id: '3',
    note: 'hi'
    },
    {id: '4',
    note: 'working?'
    }
  ]
  useEffect(() => {
    console.log(`you have ${forgetAboutItItems.length} items`)
  }, [setForgetAboutItItems, forgetAboutItItems])
  
  const onDragEnd = (result : DropResult) => {
    const {source, destination} = result
    if(!destination) return 

    const items = [...forgetAboutItItems]
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    setForgetAboutItItems(items)
  }

  return (
    <div className="grid">
      Forget about it
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="note">
          {(provided) => (
            <div className='note' {...provided.droppableProps}
            ref={provided.innerRef}>
              {tempItems.map(({id, note}, index) => (
                <Draggable 
                  key={id}
                  draggableId={id}
                  index={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style = {getItemStyle(snapshot.isDragging, provided.draggableProps.style)}    
                      >
                      {note}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
