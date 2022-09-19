export interface Note {
    id: number;
    note_body: string;
    position: {
      x: number;
      y: number;
    };
  }

  export interface Offset{
    xOffset : number, 
    yOffset : number
  }