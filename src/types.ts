export interface Note {
  note_id: number;
  note_body: string;
  position_x: number;
  position_y: number;
  dragging? : boolean;
}

export interface Offset {
  xOffset: number;
  yOffset: number;
}
