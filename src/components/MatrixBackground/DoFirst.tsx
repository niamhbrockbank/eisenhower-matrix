import { enableDropping, handleDrop } from "../../utils/dragNote";

export default function DoFirst(): JSX.Element {
  return (<><div className="grid" onDragOver={enableDropping} onDrop={handleDrop}>
    Do First
    <ul>
    <li>first !</li>
  </ul>
  </div>
  </>
  )
}
