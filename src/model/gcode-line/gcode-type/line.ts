import GCodeLine from "../gcode-line.abstract";

class Line extends GCodeLine {

  constructor() {
    super();
  }

  playLine(_motorController : any) {
    console.log("Line")
  }
};

export default Line;