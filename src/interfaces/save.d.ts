interface SaveInterface {
  name: string;
  path: string;
  data: Data;
  getSave: () => Data;
  setData: (key: keyof Data, value: Position | number) => Data;
}

interface Data {
  origin: Position;
  position: Position;
  xSize: number;
  ySize: number;
}

interface Position {
  x: number;
  y: number;
  z: number;
}

export {SaveInterface, Position, Data}